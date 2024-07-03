/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react";
import { Container, CarouselContainer, ImageContainer, Image } from "./styles";

import imgEscritorio1 from "../../assets/img/escritorio1.jpeg";
import imgEscritorio2 from "../../assets/img/escritorio2.jpeg";
import imgEscritorio3 from "../../assets/img/escritorio3.jpeg";
import imgEscritorio4 from "../../assets/img/escritorio4.jpeg";
import imgEscritorio5 from "../../assets/img/escritorio5.jpeg";

const index = () => {
  const images = [
    imgEscritorio1,
    imgEscritorio2,
    imgEscritorio3,
    imgEscritorio4,
    imgEscritorio5,
  ];
  const [duplicatedImages, setDuplicatedImages] = useState([]);

  useEffect(() => {
    setDuplicatedImages([...images, ...images]);
  }, [images]);

  return (
    <Container>
      <h3>Conheça Meu Consultório</h3>
      <CarouselContainer>
        <ImageContainer>
          {duplicatedImages.map((image, index) => (
            <Image key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </ImageContainer>
      </CarouselContainer>
    </Container>
  );
};

export default index;
