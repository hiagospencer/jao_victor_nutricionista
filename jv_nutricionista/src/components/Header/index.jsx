/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";

import { animateScroll as scroll } from "react-scroll";

import { FaBars } from "react-icons/fa";

import MenuMobile from "../MenuMobile";

import logo from "../../assets/img/logo_black.png";

import { Container, ItensMenu } from "./styles";

const index = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const onMenuVisible = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const menuItens = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Sobre",
    },
    {
      id: 3,
      title: "Saúde & Bem-Estar",
    },
    {
      id: 4,
      title: "Consulta",
    },
    {
      id: 5,
      title: "Contato",
    },
  ];

  return (
    <Container>
      <div className="logo">
        <a href="#">
          <img
            src={logo}
            alt="Logo João Victor Nutricionista"
            onClick={scroll.scrollToTop}
          />
        </a>
      </div>

      <ul className="menu-desktop">
        {menuItens.map((menu) => (
          <li key={menu.id}>
            <ItensMenu
              to={menu.title}
              spy={true}
              smooth={true}
              offset={-200}
              duration={600}>
              {menu.title}
            </ItensMenu>
          </li>
        ))}
      </ul>

      <div className="menu-mobile" onClick={onMenuVisible}>
        <FaBars />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </div>
    </Container>
  );
};

export default index;
