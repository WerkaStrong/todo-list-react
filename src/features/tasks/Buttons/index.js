import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonField, Button } from "./styled";
import {
toggleHideDone,
setAllDone,
selectIsEveryTaskDone,
selectIsTaskEmpty,
selectHideDone,
fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isTaskEmpty = useSelector(selectIsTaskEmpty);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <ButtonField className="buttons">
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!isTaskEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonField>
  );
}

export default Buttons;