import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.section`
  position: fixed;
  width: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 2%;
  background-color: #041e31;
  height: 110px;
  border-bottom: 1px solid #fff;


  &.bg-header {
    background-color: rgba(4, 30, 49, 0.9) !important;
    transition: 0.4s ease-in;
    height: 80px;

  }

  .logo img {
    width: 250px;
    height: 35vh;
  }

  ul {
    display: flex;
    gap: 40px;

    .active {
      border-bottom: 2px solid #3ba349;
      color: #3ba349;
    }
  }

  .menu-mobile {
    color: #fff;
    display: none;

    > svg {
      font-size: 30px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .menu-desktop {
      display: none;
    }
    .logo img {
      width: 150px;
      height: 220px;
    }
    .menu-mobile {
      display: block;
      padding-right: 2%;
    }
  }
`;

export const ItensMenu = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: #f2f2f2;
  padding: 5px 0;
  cursor: pointer;

  &:hover {
    color: #3ba349;
    transition: color 0.2s;
  }
`;
