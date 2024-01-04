const express = require('express');
const app = express();
const storage = require('node-persist');
const bodyParser = require('body-parser');

// Initialize storage
storage.init();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to add students
app.post('/addStudents', async (req, res) => {

    const students = req.body;

    for (const student of students) {
        const { studentID, studentName, GPA } = student;
        await storage.setItem(studentID, { studentID, studentName, GPA });
    }

    res.send("Students added!");
});

// Route to get details of all students
app.get('/allStudents', async (req, res) => {
    const allKeys = await storage.keys(); // Get all stored keys
    const allStudents = [];

    for (const key of allKeys) {
        const student = await storage.getItem(key);
        allStudents.push(student);
    }

    if (allStudents.length > 0) {
        let studentDetails = '<h1>All students data!</h1><hr>';

        for (const student of allStudents) {
            studentDetails += `
                <p><strong>Student ID:</strong> ${student.studentID}</p>
                <p><strong>Student Name:</strong> ${student.studentName}</p>
                <p><strong>GPA:</strong> ${student.GPA}</p>
                <hr>
            `;
        }

        res.send(studentDetails);
    } else {
        res.send('No students found!');
    }
});


// Route to get student by ID
app.get('/student/:id', async (req, res) => {
    const student = await storage.getItem(req.params.id);

    if (student) {
        const { studentID, studentName, GPA } = student;
        res.send(`
            <h1>Student detail</h1>
            <hr>
            <p><strong>Student ID:</strong> ${studentID}</p>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>GPA:</strong> ${GPA}</p>
            <hr>
        `);
    } else {
        res.status(404).send('Student not found!');
    }
});

// Route to get details of the student with highest GPA
app.get('/topper', async (req, res) => {
    const allKeys = await storage.keys(); // Get all stored keys
    let maxGPA = -1;
    let topper = null;

    for (const key of allKeys) {
        const student = await storage.getItem(key);
        if (student.GPA > maxGPA) {
            maxGPA = student.GPA;
            topper = student;
        }
    }

    if (topper) {
        res.send(`
            <h1>Student detail</h1>
            <hr>
            <p><strong>Student ID:</strong> ${topper.studentID}</p>
            <p><strong>Student Name:</strong> ${topper.studentName}</p>
            <p><strong>GPA:</strong> ${topper.GPA}</p>
            <hr>
        `);
    } else {
        res.send('No students found!');
    }
});


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});