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
        <div className={cx("description")}>
          This is a description for project 1
        </div>
        <div className={cx("break-line")}></div>
        <div>Some text</div>
      </div>
    </div>
  );
}

export default SidePanel;
