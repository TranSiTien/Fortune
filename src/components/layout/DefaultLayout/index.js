import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <div className={cx("header")}>
        <Container>
          <div className={cx("content")}>
            <nav>
              <span className={cx("home-nav")}>Home</span>
            </nav>
            <nav className={cx("right")}>
              <Link className={cx("nav-link")} to="login">
                Log in
              </Link>
              <Button variant="primary">Sign up</Button>
            </nav>
          </div>
        </Container>
      </div>
      {children}
    </>
  );
}

export default DefaultLayout;
