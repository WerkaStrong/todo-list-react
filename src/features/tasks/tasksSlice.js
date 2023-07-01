import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        //  ({ stan (poprzedni) }, {akcja})
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
    },
});

//export funkcji addTask
export const { addTask, toggleHideDone } = tasksSlice.actions;
//selektor (z całego state daje nam tylko tasks)
export const selectTasks = state => state.tasks;
//export reducera
export default tasksSlice.reducer;

console.log(tasksSlice.reducer({
    tasks: []
}, addTask({
    content: "Test",
    done: true,
})));