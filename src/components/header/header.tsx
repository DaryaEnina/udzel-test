import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import Button from "../button/button";
import Popup from "../popup/popup";
import "./style.scss";

const Header = () => {
  const [activeLogin, setActiveLogin] = useState(false)


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

        <Button onClick={() => setActiveLogin(true)}>
          <p className="gradientText">Войти</p>
        </Button>
      </div>
      <Popup active={activeLogin} handleBtnClick={() => setActiveLogin(false)}>
        <p>это попап входа</p>
      </Popup>
    </header>
  );
};
export default Header;
