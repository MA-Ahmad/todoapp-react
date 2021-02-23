import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <FormControl id="first-name" isRequired>
      <Flex>
        <Input
          placeholder="Todo"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <Button
          ml={2}
          colorScheme="teal"
          type="submit"
          onClick={e => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add
        </Button>
      </Flex>
    </FormControl>
  );
};
