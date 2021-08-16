import * as React from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const TextField = (props: Props) => {
  return (
    <>
      <Input
        focusBorderColor="blue"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </>
  );
};

export default TextField;
