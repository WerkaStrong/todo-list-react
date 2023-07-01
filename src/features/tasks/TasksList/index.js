import React from "react";
import { useSelector } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => toggleTaskDone(task.id)}
            toggleDone
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            {task.content}
          </Content>
          <Button
            onClick={() => removeTask(task.id)}
            remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;