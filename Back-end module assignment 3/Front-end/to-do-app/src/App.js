import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleAddTask = async () => {
        if (newTask.trim() === '') return;

        const response = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newTask }),
        });

        if (response.ok) {
            const newTaskData = await response.json();
            setTasks([...tasks, newTaskData]);
            setNewTask('');
        } else {
            console.error('Error adding task:', response.statusText);
        }
    };

    const handleDeleteTask = async (taskId) => {
        const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setTasks(tasks.filter(task => task.id !== taskId));
        } else {
            console.error('Error deleting task:', response.statusText);
        }
    };

    return (
        <div className="container text-center my-5">
            <h1 className="p-5" id="app-heading">To-Do List App</h1>
            <div className="container">
                <div className="row">
                    <label className="col-sm-2 m-2 p-2 badge" id="app-label">Enter the task:</label>
                    <input type="text" className="col-sm-7 m-2 p-2 task-input" id="task-input-box" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    <button className="col-sm-2 m-2 p-2 btn btn-primary btn-add-task" id="app-buttons" onClick={handleAddTask}>Add Task</button>
                </div>
                <div className="task-list">
                    <h2 className='p-3' id='task-list-heading'>Task List</h2>
                    <ul>
                        {tasks.map(task => (
                            <li key={task.id} className="task-item">
                                <span><b>{task.text}</b></span>
                                <button className="btn btn-sm btn-danger delete-button" onClick={() => handleDeleteTask(task.id)}>
                                    <i className="far fa-trash-alt"></i>
                                </button>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
