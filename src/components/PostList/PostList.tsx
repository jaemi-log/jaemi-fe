import React from "react";

import Card from "../Card";
import Post from "../Post";

const PostList = () => {
  return (
    <section>
      <Card>
        <Post>
          <Post.Header>22. 11. 1.</Post.Header>
          <Post.Image src="https://picsum.photos/id/237/500/500" alt="이미지" />
          <Post.Content>내용입니당~</Post.Content>
        </Post>
      </Card>
      <Card>
        <Post>
          <Post.Header>22. 11. 1.</Post.Header>
          <Post.Image src="https://picsum.photos/id/237/500/500" alt="이미지" />
          <Post.Content>내용입니당~</Post.Content>
        </Post>
      </Card>
    </section>
  );
};

export default PostList;
