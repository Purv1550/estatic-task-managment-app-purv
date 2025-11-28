import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            await axios.post('http://localhost:5000/api/tasks', task);
            fetchTasks();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
            fetchTasks();
            setEditingTask(null);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const toggleComplete = async (task) => {
        updateTask(task.id, { ...task, completed: !task.completed });
    };

    return (
        <div>
            <h1>My Tasks</h1>
            <TaskForm
                onSubmit={editingTask ? (task) => updateTask(editingTask.id, task) : addTask}
                initialData={editingTask}
                onCancel={() => setEditingTask(null)}
            />
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={setEditingTask}
                onToggleComplete={toggleComplete}
            />
        </div>
    );
};

export default Home;
