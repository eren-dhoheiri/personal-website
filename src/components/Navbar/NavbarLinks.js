import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavItem = styled(Link)`
  color: #ffff;
  margin-right: 35px;
  transition: color 0.2s ease-out;
  text-decoration: none;
  :hover {
    color: #64ffda;
    transition: color 0.2s;
  }
  &.active {
    color: #64ffda;
  }
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  @media (max-width: 768px) {
    padding: 8px 0;
    z-index: 6;
  }
`;
const NavbarLinks = ({ info }) => {
  return (
    <NavItem to={info.path} exact={"true"} activeClassName="active">
      {info.label}
    </NavItem>
  );
};

export default NavbarLinks;
