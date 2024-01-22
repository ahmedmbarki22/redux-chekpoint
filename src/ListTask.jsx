// ListTask.js
import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { setFilter } from "./Actions";

const ListTask = ({ tasks, filter, onToggle, onEdit, setFilter }) => {
  const filteredTasks =
    filter === "done"
      ? tasks.filter((task) => task.isDone)
      : filter === "notDone"
      ? tasks.filter((task) => !task.isDone)
      : tasks;

  return (
    <div className="List-do">
      <h2>Task List</h2>
      <div className="button-do">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("notDone")}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
