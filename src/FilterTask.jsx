// FilterTask.js
import React from "react";
import { connect } from "react-redux";
import { setFilter } from "./Actions";

const FilterTask = ({ setFilter }) => {
  return (
    <div className="filter-task">
      <h2>Filter Tasks</h2>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("done")}>Done</button>
      <button onClick={() => setFilter("notDone")}>Not Done</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(null, mapDispatchToProps)(FilterTask);
