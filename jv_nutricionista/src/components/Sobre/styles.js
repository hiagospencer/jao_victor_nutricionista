import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px auto 0 auto;
  max-width: 1000px;
  width: 100%;
  gap: 25px;

  .img_perfil {
    width: 50%;
    height: 90%;

    .foto {
      height: 400px;
      border-radius: 15px;
      transform: translateX(-00px);
      opacity: 0;
    }
  }

  .descricao {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: right;
    transform: translateY(80px);
    opacity: 0;

    p {
      text-align: justify;
      color: #696868;
      font-family: "Nunito Sans", Sans-serif;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.5;
    }
  }
  .sobre {
    span {
      font-family: "Questrial", sans-serif;
      font-size: 19px;
      font-weight: 600;
      color: #ba7a81;
    }
  }

  .sobre:after {
    content: "";
    display: block;
    background-color: #6ba38e;
    height: 2px;
    width: 7%;
  }

  h2 {
    font-family: "Questrial", sans-serif;
    font-size: 47px;
    font-weight: 600;
    color: #962547;
    margin: 7px 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .img_perfil {
      width: 80%;
      height: auto;
    }

    .descricao {
      width: 80%;

      p {
        font-size: 16px;
      }
    }
    h2 {
      font-size: 37px;
    }
  }
`;
