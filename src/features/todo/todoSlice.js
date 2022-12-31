import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleCompletedTodo: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    },
});

export const { addTask, toggleCompletedTodo, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;