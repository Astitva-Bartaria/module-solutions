// Import necessary libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create an app
const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Create a database connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app_db',
    connectionLimit: 10
});

// Create the tasks table if it doesn't exist
const createTasksTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL
  )
`;

// Execute the create table query
try {
    pool.query(createTasksTableQuery);
    console.log("Tasks table created successfully.");
} catch (error) {
    console.error("Error creating tasks table:", error);
}

// Add a new task
app.post('/tasks', async (req, res) => {
    const taskData = req.body;
    try {
        const [result] = await pool.promise().query('INSERT INTO tasks (text) VALUES (?)', [taskData.text]);
        const newTask = { id: result.insertId, text: taskData.text };
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ error: 'An error occurred while adding the task.' });
    }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const [rows] = await pool.promise().query('SELECT * FROM tasks');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'An error occurred while fetching tasks.' });
    }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        await pool.promise().query('DELETE FROM tasks WHERE id = ?', [taskId]);
        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'An error occurred while deleting the task.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
