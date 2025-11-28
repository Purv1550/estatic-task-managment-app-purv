const TaskItem = ({ task, onDelete, onEdit, onToggleComplete }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <button
                    className="btn-success"
                    onClick={() => onToggleComplete(task)}
                    title={task.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                    {task.completed ? 'Undo' : '✓'}
                </button>
                <button
                    className="btn-secondary"
                    onClick={() => onEdit(task)}
                >
                    Edit
                </button>
                <button
                    className="btn-delete"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
