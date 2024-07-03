/* eslint-disable react/prop-types */
import { Container } from "./styles";

const index = ({ id }) => {
  const numeroDestino = "+5584998145917";
  const mensagem =
    "Olá, João Victor, tudo bem? Tenho interesse em um dos seus serviços!";

  const url = "https://wa.me/" + numeroDestino + "?text=" + mensagem;
  return (
    <Container id={id}>
      <div className="banner"></div>
      <section className="title">
        <h1>
          Construa uma <b>relação saudável</b> com a comida e com o seu corpo
        </h1>
        <p>Atendimento Presencial em Areia Branca e Mossoró - RN.</p>
        <p>Atendimento online para todo o Brasil.</p>
        <div className="button">
          <a href={url} target="_blank">
            Agendar uma Consulta
          </a>
        </div>
      </section>
    </Container>
  );
};

export default index;
