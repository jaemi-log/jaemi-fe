import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Header;
