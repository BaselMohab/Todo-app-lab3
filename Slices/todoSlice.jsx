import { createSlice } from '@reduxjs/toolkit';  

const todoSlice = createSlice({  
    name: 'todos',  
    initialState: [],  
    reducers: {  
    },  
});  

export const { /* actions */ } = todoSlice.actions;  
export default todoSlice.reducer;