export const addTask = (description) => ({
  type: "ADD_TASK",
  payload: { description },
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: { id },
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: { filter },
});

export const editTask = (id, description) => ({
  type: "EDIT_TASK",
  payload: { id, description },
});
