import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Stack,
  HStack,
  StackDivider,
  Flex
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false
  },
  {
    text: "Write app",
    complete: true
  }
];

export const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  // const toggleTodo = (selectedTodo: Todo) => {
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Flex justifyContent="center">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
              width="50vh"
              padding="5px"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="5px"
            >
              {/* <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} /> */}
              <AddTodoForm />
              <TodoList todos={todos} toggleTodo={toggleTodo} />
            </VStack>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
