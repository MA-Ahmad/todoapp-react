import React from "react";
import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

export const AddTodoForm: React.FC = () => {
  return (
    <FormControl id="first-name" isRequired>
      <Flex>
        <Input placeholder="Todo" />
        <Button ml={2} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
};
