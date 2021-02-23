import React from "react";
import { Checkbox } from "@chakra-ui/react";

// interface Todo {
//   text?: string;
//   complete?: boolean;
// }

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Checkbox value={todo.text} isChecked={todo.complete} onChange={() => toggleTodo(todo)}>
      {todo.text}
    </Checkbox>
  );
};
