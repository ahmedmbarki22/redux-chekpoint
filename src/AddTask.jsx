// AddTask.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./Actions";
const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (description.trim() !== "") {
      onAdd(description);
      setDescription("");
    }
  };

  return (
    <div className="tasks">
      <h2 className="new"> Add New Task</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (description) => dispatch(addTask(description)),
});

export default connect(null, mapDispatchToProps)(AddTask);
