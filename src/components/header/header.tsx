import { Link } from "react-router-dom";
import "./style.scss";
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerNav">
          <Link to='/'>
            <img src={logo} alt="logo"/>
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

          <button type="button" className="outlinedBtn">
            <p className="gradientText">Войти</p>
          </button>
      </div>
    </header>
  );
};
export default Header;
