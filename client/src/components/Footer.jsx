import { NavLink } from "react-router-dom";
import linkedIn from "../assets/images/linkedIn.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import "./Footer.scss";

function Footer() {
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

  const pathsCGU = ["/mentions-legales", "/cgv"];
  const labelsCGU = ["Mentions légales", "Conditions générales de vente"];

  return (
    <div className="footer-container">
      <div className="menu">
        {paths.map((path, index) => (
          <NavLink key={`nav-${path}`} to={path}>
            {labels[index]}
          </NavLink>
        ))}
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com">
          {" "}
          <img src={linkedIn} alt="icone linkedIn" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="icone facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="icone instagram" />
        </a>
      </div>
      <div className="cgu">
        {pathsCGU.map((path, index) => (
          <NavLink className="navlink" key={`cgv-${path}`} to={path}>
            {labelsCGU[index]}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Footer;
