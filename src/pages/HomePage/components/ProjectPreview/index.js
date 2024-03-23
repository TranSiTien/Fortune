import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ProjectPreview({ name, coverImg, description, capitalRaised }) {
  return (
    <div className={cx("container")}>
      <img className={cx("cover-img")} src={coverImg} alt={name} />
      <div className={cx("heading")}>
        <h1>{name}</h1>
      </div>
      <p className={cx("description")}>{description}</p>
      <p className={cx("capital-raised")}>{capitalRaised}</p>
    </div>
  );
}

export default ProjectPreview;
