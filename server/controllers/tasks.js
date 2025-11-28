let tasks = [];
let currentId = 1;

// Get all tasks
exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

// Get task by ID
exports.getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Create new task
exports.createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = {
        id: currentId++,
        title,
        description: description || '',
        completed: false,
        createdAt: new Date()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update task
exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex > -1) {
        const updatedTask = { ...tasks[taskIndex] };

        if (title !== undefined) updatedTask.title = title;
        if (description !== undefined) updatedTask.description = description;
        if (completed !== undefined) updatedTask.completed = completed;

        tasks[taskIndex] = updatedTask;
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

// Delete task
exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex > -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json(deletedTask[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};
