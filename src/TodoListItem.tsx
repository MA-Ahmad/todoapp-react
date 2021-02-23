import React from "react";
import {
  Stack,
  HStack,
  VStack,
  StackDivider,
  Box,
  Flex,
  Checkbox
} from "@chakra-ui/react";

interface Todo {
  text?: string;
  complete?: boolean;
}

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({todo}) => {
  return (
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
        {/* <Box h="40px" bg="yellow.200"> */}
        <Checkbox value="naruto" isChecked={todo.complete}>Naruto</Checkbox>
        {/* </Box> */}
        {/* <Box h="40px" bg="tomato"> */}
        <Checkbox value="naruto">Naruto</Checkbox>

        {/* </Box> */}
        {/* <Box h="40px" bg="pink.100"> */}
        <Checkbox value="naruto">Naruto</Checkbox>

        {/* </Box> */}
      </VStack>
    </Flex>
  );
};
