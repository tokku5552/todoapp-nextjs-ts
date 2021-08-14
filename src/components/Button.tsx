import * as React from "react";
import { Button as ChakraButton, ButtonGroup } from "@chakra-ui/react";

type Props = {
  label?: string;
  onClick?: VoidFunction;
};

const Button = (props: Props) => {
  return (
    <ChakraButton colorScheme="blue" onClick={props.onClick}>
      {props.label}
    </ChakraButton>
  );
};

export default Button;
