const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const storage = require('node-persist');

const app = express();
let taskIdCounter = 1;

// Configure node-persist
(async () => {
    await storage.init(); // Initialize storage
    await storage.clear(); // Clear storage on app restart
})();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoints
app.post('/tasks', async (req, res) => {
    const task = req.body;
    task.id = taskIdCounter++;
    await storage.setItem(task.id.toString(), task);
    res.status(201).json(task);
});

app.get('/tasks', async (req, res) => {
    const tasks = await storage.values();
    res.json(tasks);
});

app.delete('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    await storage.removeItem(taskId);
    res.sendStatus(204);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});