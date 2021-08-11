import * as React from "react";
import { Todo } from "../interfaces";

type Props = {
  value: string;
};

const TextField = ({ value }: Props) => (
  <p>
    <label>
      Field:
      <input type="text" name="name" value={value} />
    </label>{" "}
    <input type="submit" value="Submit" />
  </p>
);

export default TextField;
