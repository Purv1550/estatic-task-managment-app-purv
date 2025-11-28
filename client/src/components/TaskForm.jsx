import { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialData, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDescription(initialData.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description });
        if (!initialData) {
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <h2>{initialData ? 'Edit Task' : 'Add New Task'}</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '1rem' }}>
                {initialData && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="btn-secondary"
                    >
                        Cancel
                    </button>
                )}
                <button type="submit" className="btn-primary">
                    {initialData ? 'Update Task' : 'Create Task'}
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
