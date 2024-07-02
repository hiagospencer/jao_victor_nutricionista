/* eslint-disable react/prop-types */
import { useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "./styles";

import jvImg from "../../assets/img/joao_victor2.jpeg";

function Sobre({ id }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".foto", {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: ".img_perfil",
        start: "top 400px",
        end: "bottom 200px",
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum rem et
          est harum omnis, architecto iste amet placeat corporis temporibus
          ipsam quae asperiores id eveniet, quisquam dolores provident a
          dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum rem et
          est harum omnis, architecto iste amet placeat corporis temporibus
          ipsam quae asperiores id eveniet, quisquam dolores provident a
          dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p>
          Rerum rem et est harum omnis, architecto iste amet placeat corporis
          temporibus ipsam quae asperiores id eveniet, quisquam dolores
          provident a dignissimos.
        </p>
      </div>
    </Container>
  );
}

export default Sobre;
