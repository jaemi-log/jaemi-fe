import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Content;
