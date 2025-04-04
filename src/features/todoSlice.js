import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, Text: "To-Do" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        Text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo:(state,action)=> {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, Text: action.payload.Text };
        }
        return todo;
      });
    }
  },
});

export const { addTodo, removeTodo ,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
