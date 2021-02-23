import * as React from "react";
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
import { TodoListItem } from "./TodoListItem";

const todos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false
  },
  {
    text: "Write app",
    complete: true
  }
];

export const App = () => (
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
            <TodoListItem todo={todos[0]} />
            <TodoListItem todo={todos[1]} />
          </VStack>
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
