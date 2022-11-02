import React from "react";

import Card from "../Card";
import Post from "../Post";
import styles from "./PostList.module.css";

const PostList = () => {
  return (
    <section className={styles.section}>
      <Card>
        <Post>
          <Post.Header>22. 11. 1.</Post.Header>
          <Post.Image src="https://picsum.photos/id/237/500/500" alt="이미지" />
          <Post.Content>
            농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은
            법률이 정하는 바에 의하여 인정된다. 민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
            국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기
            위하여 대통령 소속하에 감사원을 둔다. ~
          </Post.Content>
        </Post>
      </Card>
      <Card>
        <Post>
          <Post.Header>22. 11. 1.</Post.Header>
          <Post.Image src="https://picsum.photos/id/237/500/500" alt="이미지" />
          <Post.Content>
            농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은
            법률이 정하는 바에 의하여 인정된다. 민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
            국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기
            위하여 대통령 소속하에 감사원을 둔다. ~
          </Post.Content>
        </Post>
      </Card>
    </section>
  );
};

export default PostList;
