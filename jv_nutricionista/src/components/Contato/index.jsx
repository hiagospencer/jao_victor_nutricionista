/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";

import { Container, MapGoogle } from "./styles";

function index({ id }) {
  return (
    <Container id={id}>
      <section className="contato">
        <div className="informacoes_contato">
          <h2>Fale Conosco</h2>

          <div className="informacao">
            <FaPhoneAlt /> <span>(84) 9 9814-5917</span>
          </div>
          <div className="informacao">
            <FaWhatsapp /> <span>(84) 9 9814-5917</span>
          </div>
          <div className="informacao">
            <MdOutlineEmail /> <span>joaovictor@gmail.com</span>
          </div>
          <div className="informacao">
            <MdLocationOn />
            <p>
              Rua: Coronel Liberalino Nº 141 - Centro - Areia Branca/RN
              <br />
              Rua:Cícero Gade Nº 01 - Nova Betânia - Mossoró/RN
            </p>
          </div>

          <h3>Redes Sociais:</h3>
          <div className="redes_sociais">
            <a href="https://wa.me/+5584998145917" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/jvictornutri/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/joaovictor.silva.77398"
              target="_blank">
              <FaFacebook />
            </a>
          </div>
        </div>

        <MapGoogle className="google_maps">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.7208488455186!2d-37.13627020556097!3d-4.955685850846844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b75acf9323f125%3A0xbf9deab4cf97f598!2sR.%20Cel.%20Liberalino%2C%20141%2C%20Areia%20Branca%20-%20RN%2C%2059655-000!5e0!3m2!1spt-BR!2sbr!4v1719883408047!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </MapGoogle>
      </section>
    </Container>
  );
}

export default index;
