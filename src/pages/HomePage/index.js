import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import ProjectPreview from "./components/ProjectPreview";

const cx = classNames.bind(styles);

const projects = [
  {
    id: 1,
    name: "Project 1",
    coverImg: "https://picsum.photos/300/200",
    capitalRaised: "13M SOL",
    description: "This is a description for project 1",
  },
  {
    id: 2,
    name: "Project 2",
    coverImg: "https://picsum.photos/300/200",
    capitalRaised: "5M SOL",
    description: "This is a description for project 2",
  },
  {
    id: 3,
    name: "Project 3",
    coverImg: "https://picsum.photos/300/200",
    capitalRaised: "2M SOL",
    description: "This is a description for project 3",
  },
  {
    id: 4,
    name: "Project 4",
    coverImg: "https://picsum.photos/300/200",
    capitalRaised: "2M SOL",
    description: "This is a description for project 4",
  },
  {
    id: 5,
    name: "Project 5",
    coverImg: "https://picsum.photos/300/200",
    capitalRaised: "1M SOL",
    description: "This is a description for project 5",
  },
];

function HomePage() {
  return (
    <>
      <div className={cx("inspiring-panel")}>
        <Container>
          <div className={cx("title")}>Fortune</div>
          <div className={cx("description")}>
          A place that allows blockchain projects to call for capital and transparent user investment amounts through community voting and decision-making at each stage, limiting risks for consultants on the project blockchain.
          </div>
        </Container>
      </div>
      <div className={cx("main")}>
        <Container>
          <div className={cx("title")}>Top 5 successful capital raising projects of the month</div>
          <Row>
            {projects.map((project) => (
              <Col key={project.id} xs={12} md={4}>
                <ProjectPreview {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
