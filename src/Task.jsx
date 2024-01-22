// Task.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTask, editTask } from "./Actions";

const Task = ({ task, onToggle, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedDescription);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
          >
            {task.description}
          </span>
          <button onClick={handleToggle}>
            {task.isDone ? "Undo" : "Complete"}
          </button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onToggle: (id) => dispatch(toggleTask(id)),
  onEdit: (id, description) => dispatch(editTask(id, description)),
});

export default connect(null, mapDispatchToProps)(Task);
