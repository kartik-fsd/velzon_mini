import menuItems from "../Data/data";
import VerticalSidebar from "./vertical";
import logoLight from "../assets/images/logo-light.png";
import "./layout.css";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        <a href="/#" className="logo logo-dark">
          <span className="logo-lg">
            <img src={logoLight} alt="" height="17" />
          </span>
        </a>
      </div>
      <VerticalSidebar menuItems={menuItems} />
    </div>
  );
}
