import { useState } from "react";

function TaskItem({
  task,
  onDelete,
  onToggle,
  onEdit
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(task.title);
  const [editCategory, setEditCategory] = useState(task.category);

  function handleEditSubmit(event) {
    event.preventDefault();

    if (editTitle.trim() === "") {
      return;
    }

    onEdit(
      task.id,
      editTitle.trim(),
      editCategory
    );

    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form
        className="task-item edit-form"
        onSubmit={handleEditSubmit}
      >

        <input
          type="text"
          value={editTitle}
          onChange={(event) =>
            setEditTitle(event.target.value)
          }
        />

        <select
          value={editCategory}
          onChange={(event) =>
            setEditCategory(event.target.value)
          }
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Urgent">Urgent</option>
          <option value="Study">Study</option>
        </select>

        <div className="edit-buttons">
          <button type="submit">
            Save
          </button>

          <button
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>

      </form>
    );
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>

      <div className="task-content">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <div>
          <h3>{task.title}</h3>

          <span className="category">
            {task.category}
          </span>
        </div>

      </div>

      <div className="task-actions">

        <button
          onClick={() => setIsEditing(true)}
          className="edit-button"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="delete-button"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;