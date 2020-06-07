import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">conduit</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
          
          {/* TODO: 로그인되어있는지에 따라 버튼을 다르게 표시하기*/}
          <li className="nav-item"><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
          <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
