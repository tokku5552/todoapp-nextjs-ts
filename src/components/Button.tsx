import * as React from "react";

type Props = {
  label?: string;
  onClick?: VoidFunction;
};

const Button = (props: Props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;
