/* eslint-disable react/prop-types */

import { IoClose } from "react-icons/io5";

import { MenuContainer, MenuItems,MenuButton, MenuItem, ItensMenu } from "./styles";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
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
    <>
      {menuIsVisible && (
        <MenuButton>
          <IoClose size={35} onClick={() => setMenuIsVisible(false)} />
        </MenuButton>
      )}
      <MenuContainer menuIsVisible={menuIsVisible}>
        <MenuItems>
          {menuItens.map((menu) => (
            <MenuItem key={menu.id}>
              <ItensMenu
                to={menu.title}
                spy={true}
                smooth={true}
                offset={-200}
                duration={600}
                onClick={() => setMenuIsVisible(false)}>
                {menu.title}
              </ItensMenu>
            </MenuItem>
          ))}
        </MenuItems>
      </MenuContainer>
    </>
  );
};

export default MenuMobile;
