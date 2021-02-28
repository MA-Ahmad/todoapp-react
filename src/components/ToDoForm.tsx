import * as React from "react";
import { nanoid } from "nanoid";
import { TodoInterface, TodoFormInterface } from "../interface";
const ToDoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [values, setValues] = React.useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    // Check for ‘Enter’ key
    if (event.key === "Enter") {
      // Prepare new todo object
      const newTodo: TodoInterface = {
        id: nanoid(),
        name: values,
        isCompleted: false
      };
      // Create new todo item
      props.handleTodoCreate(newTodo);
      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }
  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};
export default ToDoForm;
