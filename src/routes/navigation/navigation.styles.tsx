import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: #000000;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  padding: 15px 20px;
  cursor: pointer;
  color: #000000;
  text-decoration: none;

  &:hover {
    border: 1px solid black;
  }
`;
