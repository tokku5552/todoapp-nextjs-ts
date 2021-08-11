import * as React from "react";

type Props = {
  value?: string;
};

const TextField = ({ value }: Props) => {
  const [message, setMessage] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("次のメッセージが送信されました: " + message);
  };
  return (
    <p>
      <form onSubmit={handleSubmit}>
        <label>
          Field:
          <input type="text" value={message} onChange={handleChange} />
        </label>{" "}
        <input type="submit" value="送信" />
      </form>
    </p>
  );
};

export default TextField;
