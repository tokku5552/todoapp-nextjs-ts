import * as React from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const TextField = (props: Props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

export default TextField;
