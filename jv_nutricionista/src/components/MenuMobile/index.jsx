/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

import { Container } from "./styles";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {

  return (
    <Container menuIsVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <ul>
        <li>
          <a href="#" onClick={() => setMenuIsVisible(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuIsVisible(false)}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuIsVisible(false)}>
            Cuidar da Saúde
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuIsVisible(false)}>
            Consulta
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setMenuIsVisible(false)}>
            Contato
          </a>
        </li>
      </ul>
    </Container>
  );
};


export default MenuMobile;
