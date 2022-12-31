import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useStateContext } from "../../context/StateContext";
import Button from "../button/button";
import LoginForm from "../loginForm/loginForm";
import Popup from "../popup/popup";
import RegForm from "../registrationForm/regForm";
import "./style.scss";

const Header = () => {
  const {activeRegistration, setActiveRegistration, activeLogin, setActiveLogin} = useStateContext();

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
        <LoginForm/>
      </Popup>
      <Popup
        active={activeRegistration}
        handleBtnClick={() => setActiveRegistration(false)}
      >
        <RegForm/>
      </Popup>
    </header>
  );
};
export default Header;
