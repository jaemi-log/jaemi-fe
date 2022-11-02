import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PostList from "../components/PostList";
import UploadDialog from "../components/UploadDialog";

const Home = () => {
  return (
    <>
      <Header />
      <PostList />
      <UploadDialog />
      <Navigation />
    </>
  );
};

export default Home;
