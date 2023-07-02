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
        addTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: state => {
            state.tasks.forEach(tasks => {
                tasks.done = true;
            })
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
    },
});

//export funkcji addTask
export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
//selektor (z całego state daje nam tylko tasks)
export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({done}) => done);
export const selectIsTaskEmpty = state => selectTasks(state).length === 0;
//export reducera
export default tasksSlice.reducer;