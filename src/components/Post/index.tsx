import React, { ReactNode } from "react";

import Content from "./Content";
import Header from "./Header";
import Image from "./Image";

type Props = {
  children: ReactNode;
};
const Post = ({ children }: Props) => {
  return <article>{children}</article>;
};

Post.Header = Header;
Post.Image = Image;
Post.Content = Content;

export default Post;
