import { useState, useEffect } from "react";

export function useTasks() {
   const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ]);
    };

    return ({tasks, addNewTask });

}