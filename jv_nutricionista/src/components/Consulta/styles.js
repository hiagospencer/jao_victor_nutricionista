import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto 60px auto;
  max-width: 1100px;


  h2 {
    padding: 20px 0;
    font-family: "Questrial", sans-serif;
    font-size: 37px;
    font-weight: 600;
    color: #ba7a81;
    text-align: center;
  }

  h2:after {
    content: "";
    display: block;
    background-color: #6ba38e;
    height: 2px;
    width: 15%;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 25px;
      padding: 20px 3%;
    }

  }
`;

export const GridConsulta = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .card_consulta {
    width: 31%;

    .img_consulta {
      background-color: #d0dcdc;
    }

    .tipo_consulta {
      display: flex;
      flex-direction: column;
      background-color: #d0dcdc;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      h3 {
        text-align: center;
        padding: 10px 0;
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        font-weight: 700;
      }

      p {
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #3f444b;
        padding: 0 15px;
        text-align: justify;
        line-height: 1.4;
      }

      .button_consulta {
        margin: 0 auto;
        padding: 25px 0;

        a {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          background-color: #1b2425;
          padding: 10px 15px;
          border-radius: 8px;
        }
        a:hover {
          background-color: #fff;
          color: #1b2425;
          border: 1px solid #cecece;
          transition: 0.3s ease-in;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card_consulta {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
