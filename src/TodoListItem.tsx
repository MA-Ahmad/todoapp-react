import React from "react";
import { Checkbox } from "@chakra-ui/react";

// interface Todo {
//   text?: string;
//   complete?: boolean;
// }

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <Checkbox value="naruto" isChecked={todo.complete}>
      Naruto
    </Checkbox>
  );
};
