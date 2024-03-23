import { Button } from "react-bootstrap";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SidePanel() {
  return (
    <div className={cx("container")}>
      <img
        className={cx("cover-img")}
        src="https://picsum.photos/300/200"
        alt="Project 1"
      />
      <div className={cx("content")}>
        <div className={cx("heading")}>Project 1</div>
        <div className={cx("description")}>
          This is a description for project 1
        </div>
        <div className={cx("break-line")}></div>
        <a
          className={cx("website-link")} 
          href="https://example.com/white-paper.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/5094/5094288.png" alt="white paper" width={30} height={30}/>
          White Paper
        </a>
        <br></br>
        <a
          className={cx("website-link")}
          href="https://example.com/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://static.thenounproject.com/png/3053647-200.png" alt="website" width={30} height={30}/>
          Roadmap
        </a>
        <br></br>
      </div>
    </div>
  );
}

export default SidePanel;
