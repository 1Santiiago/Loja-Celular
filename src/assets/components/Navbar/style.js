import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const Li = styled.li`
  margin-left: 30px;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
`;


export const NavLink = styled(Link)`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #666;
  }
`;
