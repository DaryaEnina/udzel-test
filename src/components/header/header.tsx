import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
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
  );
};
export default Header;
