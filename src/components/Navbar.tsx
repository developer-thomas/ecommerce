import "./Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import darkUser from "../assets/dark-user.png";
import lightUser from "../assets/light-user.png";
import darkCart from "../assets/dark-cart.png";
import lightCart from "../assets/light-cart.png";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";
import blackToggle from "../assets/toggle-dark.png";
import lightToggle from "../assets/toggle-light.png";
import { ModeThemeProps } from "../models/ModeThemeProps";

const Navbar = ({ mode, setMode }: ModeThemeProps) => {
  // menu hook mostra ao usuário onde ele clicou/está
  const [menu, setMenu] = useState<string>("home");
  // toggler
  const [showMenu, setShowMenu] = useState<string>("");

  // function change the page theme
  function changeTheme() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  // function to responsive navbar
  function toggler() {
    setShowMenu((prevMenu) => (prevMenu === "" ? "show" : ""));
  }

  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="watch image logo" />
      </a>
      <img id="bars" onClick={toggler} src={mode === "light" ? blackToggle : lightToggle} alt="toggle icon" />
      <div className="all-icon-nav">
        <div className={showMenu === "show" ? "navbars show" : "navbars"}>
          <div className="links">
            <ul>
              <li onClick={() => setMenu("home")}>Home{menu === "home" && <hr></hr>}</li>
              <li onClick={() => setMenu("men")}>Men{menu === "men" && <hr></hr>}</li>
              <li onClick={() => setMenu("women")}>Women{menu === "women" && <hr></hr>}</li>
              <li onClick={() => setMenu("contact")}>Contact{menu === "contact" && <hr></hr>}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img
          className="img"
          onClick={() => setMenu("")}
          src={mode === "light" ? darkUser : lightUser}
          alt="user login icon"
        />
        <img
          className="img"
          onClick={changeTheme}
          src={mode === "light" ? moonIcon : sunIcon}
          alt="change mode color icon"
        />
        <span className="crt">
          <img
            className="img cart"
            onClick={() => setMenu("")}
            src={mode === "light" ? darkCart : lightCart}
            alt="user cart icon"
          />
          <div className="crt-bt"></div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
