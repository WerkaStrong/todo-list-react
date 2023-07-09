import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./styled";
import { fetchExampleTasks, setLoading } from "../../../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);

  const handleClick = () => {
    dispatch(setLoading(false));
    setTimeout(() => {
      dispatch(fetchExampleTasks());
      dispatch(setLoading(true));
    }, 1300)
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
}

export default ExampleTasksButton;