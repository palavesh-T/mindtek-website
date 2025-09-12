import { useState, useEffect  } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink  } from "react-router-dom";
import "../assete/css/header.css";
import logo from "../assete/logo/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);



  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/* Desktop Menu */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/Home"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() =>{ setMenuOpen(false); setTimeout(() => { window.scrollTo(0, 0);  }, 0);}} 
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() =>{ setMenuOpen(false); setTimeout(() => { window.scrollTo(0, 0);  }, 0);}}
        >
          About
        </NavLink>
        <NavLink
          to="/Service"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() =>{ setMenuOpen(false); setTimeout(() => { window.scrollTo(0, 0);  }, 0);}}
        >
          Services
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? "active" : "")}
         onClick={() =>{ setMenuOpen(false); setTimeout(() => { window.scrollTo(0, 0);  }, 0);}}
        >
          Contact
        </NavLink>
      </nav>

    
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes style={{color:"#000"}} /> : <FaBars  />}
      </div>
    </header>
  );
};

export default Header;
