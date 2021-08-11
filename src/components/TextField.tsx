import * as React from "react";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const TextField = (props: Props) => {
  //   const [message, setMessage] = React.useState(props.value);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setMessage(e.target.value);
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     alert("次のメッセージが送信されました: " + message);
  //   };
  return (
    <input
      type="text"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

export default TextField;
