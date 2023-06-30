import React from "react";
import { ButtonField, Button } from "./styled";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonField className="buttons">
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone}
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

export default Buttons;