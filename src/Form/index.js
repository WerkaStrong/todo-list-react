import React, { useState, useRef } from "react";
import { FormField, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <FormField onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                type="text"
                id="myText"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={focusInput}
                hover
                active
            >
                Dodaj zadanie
            </Button>
        </FormField>
    )
};

export default Form;