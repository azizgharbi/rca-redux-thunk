import React from "react";
//Styles
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";

export default Headers = () => (
  <NavWrapper>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </NavWrapper>
);
