import { Link } from "react-router-dom";
import "./NavbarMenu.css";
import close from "../../../assets/close.png";
const NavbarMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <aside className={activeMenu ? "active" : ""}>
      <img
        className="close-btn"
        src={close}
        alt="close menu button"
        onClick={() => setActiveMenu(false)}
      />
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavbarMenu;
