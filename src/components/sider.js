import React from "react";
import { Link } from "react-router-dom";
function Sider(props) {
  return (
    <div className="contente-sider">
      <nav className="tag">
        <Link className="nav-tag" to={"/"} rel="noopener noreferrer">
          {/* <img className="tag-yoga" src={props.yogaUrl} alt="logo" /> */}
          <img className="tag-img" src={props.yogaUrl} alt="logo" />
        </Link>

        <Link
          className="nav-tag "
          to={"/" + props.natationlink}
          rel="noopener noreferrer"
        >
          <img className="tag-img" src={props.natationUrl} alt="logo" />
        </Link>
        <Link
          className="nav-tag"
          to={"/" + props.cyclismeLink}
          rel="noopener noreferrer"
        >
          <img className="tag-img" src={props.cyclismeUrl} alt="logo" />
        </Link>
        <Link
          className="nav-tag"
          to={"/" + props.musculationLink}
          rel="noopener noreferrer"
        >
          <img className="tag-img" src={props.musculationUrl} alt="logo" />
        </Link>
      </nav>
      <div className="footer">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}
export default Sider;
