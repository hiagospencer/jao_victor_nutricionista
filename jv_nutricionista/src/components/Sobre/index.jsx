/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "./styles";

import jvImg from "../../assets/img/joao_victor2.jpeg";

function index({ id }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".foto", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".img_perfil",
        start: "top 750px",
        end: "bottom 500px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".foto");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".descricao", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".descricao",
        start: "top 470px",
        end: "bottom 520px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".descricao");
    };
  }, []);

  return (
    <Container id={id}>
      <div className="img_perfil">
        <img className="foto" src={jvImg} alt="Foto de perfil de João Victor" />
      </div>

      <div className="descricao">
        <div className="sobre">
          <span>Sobre Mim</span>
        </div>
        <h2>João Victor</h2>
        <p>
          Meu nome é João Victor, sou nutricionista e graduando em nutrição
          esportiva, exames laboratoriais e clínica. Escolhi a área esportiva
          por afinidade, por ter praticado e ser praticante de diversas
          modalidades como crossfit, musculação, surf, jiu-jitsu, Tae Kwon Do,
          boxe, mma, capoeira, corrida e natação. Minhas experiências com vários
          esportes e competições combinado com a formação, faz com que eu
          consiga facilitar as estratégias nutricionais alinhada com os
          objetivos e realidades de cada paciente.
        </p>
      </div>
    </Container>
  );
}

export default index;
