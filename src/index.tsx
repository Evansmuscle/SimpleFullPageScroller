import React from "react";

export interface Props {
  text: string;
}

const Example: React.FC<Props> = ({ text }) => {
  return <div>Hello {text}</div>;
};

export default Example;
