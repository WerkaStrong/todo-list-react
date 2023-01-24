import React from "react";
import { ButtonField, Button } from "./styled";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonField className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
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
      </React.Fragment>
    )}
  </ButtonField>
);

export default Buttons;