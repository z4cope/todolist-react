import NavbarMenu from "./navbar-menu/NavbarMenu";
import bar from "../../assets/bar.png";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      <nav>
        <img
          onClick={() => setActiveMenu(true)}
          src={bar}
          alt="navigation menu icon"
        />
      </nav>
      <NavbarMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </>
  );
};

export default Navbar;
