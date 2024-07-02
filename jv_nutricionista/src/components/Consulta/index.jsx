/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, GridConsulta } from "./styles";

import imgPresencial from "../../assets/img/consulta-presencial.webp";
import imgOnline from "../../assets/img/consultas-online.webp";
import avaliacaoFisica from "../../assets/img/avaliacao-fisica.jpg";

function Consulta({ id }) {
  const numeroDestino = "+5584998145917";
  const mensagemPresencial =
    "Olá, João Victor, tudo bem? Tenho interesse em fazer uma consulta presencialmente!";
  const mensagemOnline =
    "Olá, João Victor, tudo bem? Tenho interesse em fazer uma consulta online!";
  const mensagemAvalicaoFisica =
    "Olá, João Victor, tudo bem? Tenho interesse em fazer uma avaliação física!";

  const urlPresencial =
    "https://wa.me/" + numeroDestino + "?text=" + mensagemPresencial;
  const urlOnline =
    "https://wa.me/" + numeroDestino + "?text=" + mensagemOnline;
  const urlAvalicaoFisica =
    "https://wa.me/" + numeroDestino + "?text=" + mensagemAvalicaoFisica;

  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".card_consulta",
            scrub: true,
            start: "top center",
            end: "bottom 850px",
          },
        })
        .fromTo(
          "#card-1",
          {
            opacity: 0,
            x: -120,
          },
          {
            opacity: 1,
            x: 0,
          }
        )
        .fromTo(
          "#card-2",
          {
            opacity: 0,
            y: 160,
          },
          {
            opacity: 1,
            y: 0,
          }
        )
        .fromTo(
          "#card-3",
          {
            opacity: 0,
            y: -100,
          },
          {
            opacity: 1,
            y: 0,
          }
        );
    }, el);

    return () => {
      gsap.killTweensOf(".card_consulta");
    };
  }, []);

  return (
    <Container id={id}>
      <h2>Como funciona a consulta?</h2>
      <GridConsulta ref={el}>
        <div className="card_consulta" id="card-1">
          <div className="img_consulta">
            <img src={imgPresencial} alt="" />
          </div>
          <div className="tipo_consulta">
            <h3>Consultas presenciais</h3>
            <p>
              As consultas presenciais duram em torno de 40 a 60 minutos. Tempo
              necessário para fazermos a avaliação física e conversarmos para
              que eu possa entender seu objetivo e rotina e assim elaborar todo
              um planejamento alimentar individualizado e específico pra você.
            </p>
            <div className="button_consulta">
              <a href={urlPresencial} target="_blank">
                Consultar presencialmente
              </a>
            </div>
          </div>
        </div>

        <div className="card_consulta" id="card-2">
          <div className="img_consulta">
            <img src={imgOnline} alt="" />
          </div>
          <div className="tipo_consulta">
            <h3>Consultas on-line</h3>
            <p>
              As consultas on-lines são realizadas por video chamadas, com um
              tempo de duração em torno de 30 a 50 minutos Tempo necessário para
              conversarmos e eu entender seu objetivo e rotina. Como a consulta
              será online, peço sempre que me envie fotos de top e short
              <b> (mulheres) / sunga (homens)</b>, assim poderemos acompanhar
              melhor a sua evolução. Além disso, se for possível, peço também
              que faça uma avaliação física com algum profissional da sua região
              e me mande os dados (Altura, peso, dobras cutâneas e
              circunferências). Dessa maneira consigo elaborar todo um
              planejamento nutricional específico e individualizado que se
              encaixe na sua rotina.
            </p>
            <div className="button_consulta">
              <a href={urlOnline} target="_blank">
                Consultar online
              </a>
            </div>
          </div>
        </div>

        <div className="card_consulta" id="card-3">
          <div className="img_consulta">
            <img src={avaliacaoFisica} alt="" />
          </div>
          <div className="tipo_consulta">
            <h3>Avaliações físicas</h3>
            <p>
              Nas avaliações físicas faço a medição das 7 dobras cutâneas com o
              adipômetro científico, além da circunferências, altura e peso
              atual. Com essas informações obtemos o percentual de gordura e
              massa muscular atual do paciente. Esse procedimento leva em torno
              de 10 a 20 minutos
            </p>
            <div className="button_consulta">
              <a href={urlAvalicaoFisica} target="_blank">
                Fazer avaliação física
              </a>
            </div>
          </div>
        </div>
      </GridConsulta>
    </Container>
  );
}

export default Consulta;
