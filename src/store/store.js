import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import userSlice from "../features/user/userSlice";


 const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
       
    },
});

export default store;
