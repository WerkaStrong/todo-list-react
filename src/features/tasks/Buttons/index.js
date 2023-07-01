import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonField, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";


const Buttons = ({ setAllDone }) => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ButtonField className="buttons">
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonField>
  );
}

export default Buttons;