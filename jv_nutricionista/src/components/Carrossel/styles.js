import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

export const Container = styled.section`
  background-color: #1b2425;
  padding: 45px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    padding: 23px 0;
    font-family: "Questrial", sans-serif;
    font-size: 37px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }

  h3:after {
    content: "";
    display: block;
    background-color: #6ba38e;
    height: 2px;
    width: 23%;
  }

  @media (width <= 768px){
    h3 {
      font-size: 30px;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 200%;

  gap: 15px;
  animation: ${slide} 25s linear infinite;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  border: 1px solid #ccc;
`;
