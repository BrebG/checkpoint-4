import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  const paths = [
    "/",
    "/about",
    "/reviews",
    "/contact",
    "/consultation",
    "/blog",
  ];
  const labels = [
    "Accueil",
    "A propos",
    "Vos avis",
    "Me contacter",
    "Consultations",
    "Blog",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState(null);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > 820 ? setDevice("desktop") : setDevice("mobile");

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setIsOpen(!isOpen)}>
        <img className="home" src={logo} alt="Logo upya" />
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>L'Herboripathe</h1>
      </Link>
      {device === "mobile" ? (
        <>
          <motion.ul
            initial={{ y: -200 }}
            animate={{ y: !isOpen ? -200 : 175 }}
            className="links"
          >
            {paths.map((path, index) => (
              <motion.li onClick={() => setIsOpen(!isOpen)} key={path}>
                <NavLink to={path}>{labels[index]}</NavLink>
              </motion.li>
            ))}
          </motion.ul>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="burger"
            label="toggle-menu"
          >
            B
          </button>
        </>
      ) : (
        <ul className="links">
          {paths.map((path, index) => (
            <motion.li onClick={() => setIsOpen(!isOpen)} key={path}>
              <NavLink to={path}>{labels[index]}</NavLink>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
