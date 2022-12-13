import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Button from "../button/button";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerNav">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/buy">Купить</Link>
              </li>
              <li>
                <Link to="/help">Помочь</Link>
              </li>
              <li>
                <Link to="/project">О проекте</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Button>
          <p className="gradientText">Войти</p>
        </Button>
      </div>
    </header>
  );
};
export default Header;
