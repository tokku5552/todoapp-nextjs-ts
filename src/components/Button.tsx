import * as React from "react";
import {
  Button as ChakraButton,
  ButtonGroup,
  propNames,
  withDefaultProps,
} from "@chakra-ui/react";

type Props = {
  label?: string;
  onClick?: VoidFunction;
  isActive?: boolean;
};

const Button = ({ label, onClick, isActive = true }: Props) => {
  return (
    <ChakraButton
      colorScheme="blue"
      onClick={onClick}
      variant={isActive ? "solid" : "outline"}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
