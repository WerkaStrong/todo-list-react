import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
        allDone: false,
    },
    reducers: {
        //  ({ stan (poprzedni) }, {akcja})
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: state => {
            state.tasks.forEach(tasks => {
                tasks.done = true;
            })
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
    },
});

//export funkcji addTask
export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
//selektor (z całego state daje nam tylko tasks)
export const selectTasksState = state => state.tasks;


export const selectTasks = state => selectTasksState(state).tasks;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({done}) => done);
//export reducera
export default tasksSlice.reducer;