import SidePanel from "./components/SidePanel";
import Post from "./components/Post";
import CapitalRaisingRound from "./components/CapitalRasingRound";
import { Button, Container } from "react-bootstrap";
import 'boxicons';

import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const posts = [
  {
    id: 1,
    image: "https://picsum.photos/300/200",
    title: "Post 1",
    description: "This is a description for post 1",
    date: "2021-01-01",
  },
  {
    id: 2,
    image: "https://picsum.photos/300/200",
    title: "Post 2",
    description: "This is a description for post 2",
    date: "2021-01-02",
  },
  {
    id: 3,
    image: "https://picsum.photos/300/200",
    title: "Post 3",
    description: "This is a description for post 3",
    date: "2021-01-03",
  },
  {
    id: 4,
    image: "https://picsum.photos/300/200",
    title: "Post 4",
    description: "This is a description for post 4",
    date: "2021-01-04",
  },
  {
    id: 5,
    image: "https://picsum.photos/300/200",
    title: "Post 5",
    description: "This is a description for post 5",
    date: "2021-01-05",
  },
];

function ProjectDetail() {
  return (
    
    <div className={cx("container")}>
      <div className={cx("side-panel")}>
        <SidePanel />
      </div>
      <CapitalRaisingRound />
      <div className={cx("content")}>
        {posts.map((post) => (
          <div className={cx("post-wrapper")}>
            <Post
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
