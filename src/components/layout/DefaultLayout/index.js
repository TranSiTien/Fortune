import { Container, Button } from "react-bootstrap";
import logo from "./logo.png";
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} alt="logo" width={30} height={30} />
              <a className="navbar-brand" href="#">Fortune</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">News feed</a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className={cx("right")}>
              <Button className="btn btn-dark">Login</Button>
            </nav>
          </div>
        </Container>
      </div>
      <div className={cx("children")}>{children}</div>
    </>
  );
}

export default DefaultLayout;
