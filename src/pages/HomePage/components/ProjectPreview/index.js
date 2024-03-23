import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProjectPreview({ name, coverImg, description }) {
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <h1>{name}</h1>
      </div>

      <img className={cx("cover-img")} src={coverImg} alt={name} />
      <p className={cx("description")}>{description}</p>
    </div>
  );
}

export default ProjectPreview;
