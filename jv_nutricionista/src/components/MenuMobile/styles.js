import styled from "styled-components";
import { Link } from "react-scroll";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #041e31;

  transform: ${({ menuIsVisible }) =>
    menuIsVisible ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  right: 10px;
  background-color: #041e31;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
`;

export const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 100px ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin: 20px 0;
`;

export const ItensMenu = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  width: 100%;
  color: #f2f2f2;
  padding: 5px 0;
  cursor: pointer;

  &:hover {
    color: #3ba349;
    transition: color 0.2s;
  }
`;
