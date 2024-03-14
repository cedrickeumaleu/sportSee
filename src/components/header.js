import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="header">
      <div className="contente-logo">
        <img className="logo" src={props.logoUrl} alt="logo" />
      </div>
      <nav className="navbar">
        <Link className="nav-link active" to={"/"} rel="noopener noreferrer">
          {props.homeText}
        </Link>

        <Link
          className="nav-link active"
          to={"/" + props.profilLink}
          rel="noopener noreferrer"
        >
          {props.profilText}
        </Link>
        <Link
          className="nav-link active"
          to={"/" + props.reglageLink}
          rel="noopener noreferrer"
        >
          {props.reglageText}
        </Link>
        <Link
          className="nav-link active"
          to={"/" + props.communautyLink}
          rel="noopener noreferrer"
        >
          {props.communautyText}
        </Link>
      </nav>
    </header>
  );
}
export default Header;
