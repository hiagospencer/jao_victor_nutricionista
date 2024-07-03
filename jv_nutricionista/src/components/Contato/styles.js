import styled from "styled-components";

export const Container = styled.section`
  background-color: #f3f3f3;

  .contato {
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 50px 1%;

    .informacoes_contato {
      display: flex;
      flex-direction: column;
      flex: 1;

      h2 {
        padding: 20px 0;
        font-family: "Questrial", sans-serif;
        font-size: 37px;
        font-weight: 600;
        color: #ba7a81;
      }

      .informacao {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        svg {
          font-size: 22px;
          color: #878787;
        }

        span,
        p {
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: #3f444b;
          padding: 0 15px;
        }
        p {
          line-height: 1.5;
        }
      }

      h3 {
        padding: 16px 0;
        font-family: "Questrial", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #ba7a81;
      }

      .redes_sociais {
        display: flex;
        gap: 15px;

        svg {
          font-size: 30px;

          &:hover {
            transform: translateY(3px);
            transition: 0.2s;
          }
        }
      }
      .redes_sociais a:nth-child(1) {
        color: green;
      }
      .redes_sociais a:nth-child(2) {
        color: #d41155;
      }
      .redes_sociais a:nth-child(3) {
        color: blue;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contato {
      flex-direction: column;
    }
    .informacoes_contato {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 auto;
      width: 80%;
    }
  }
`;

export const MapGoogle = styled.section`
  width: 50%;

  .map {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.75);
    box-shadow: 4px 5px 10px -4px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 5px 10px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 5px 10px -4px rgba(0, 0, 0, 0.75);

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;

    .map {
      margin-top: 50px;
    }
  }
`;
