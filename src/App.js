import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Provider } from "react-redux";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="list-page" >
        <h1>ToDo App with Redux</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
