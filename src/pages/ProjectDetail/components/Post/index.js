import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Post({ image, title, description, date }) {
  return (
    <div className={cx("container")}>
      <div>
        <img className={cx("cover-img")} src={image} alt={title} />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>{title}</div>
        <div className={cx("date")}>{date}</div>
        <div className={cx("description")}>{description}</div>
      </div>
    </div>
  );
}

export default Post;
