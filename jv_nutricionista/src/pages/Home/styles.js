import styled from "styled-components";
import imgBanner from "../../assets/img/portada.svg";

export const Container = styled.section`
  position: relative;
  .banner {
    background-image: url(${imgBanner});
    background-attachment: fixed;
    
    height: 100vh;
    opacity: 0.9;
    z-index: 1;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 700px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(7px);
    margin-top: 50px;
    padding: 15px 5px;
    border-radius: 15px;

    h1 {
      font-size: 40px;
      color: #000;
    }

    p {
      margin-top: 8px;
      font-size: 22px;
      font-weight: 600;
      font-style: italic;
      color: #030303;
    }

    .button {
      width: 50%;
      margin: 10px auto 0 auto;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 10px 20px;
        border-radius: 11px;
        background-color: #c20805;
        font-size: 22px;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 4px 2px 1px 0px rgba(0, 78, 105, 0.68);
        -webkit-box-shadow: 4px 2px 1px 0px rgba(0, 78, 105, 0.68);
        -moz-box-shadow: 4px 2px 1px 0px rgba(0, 78, 105, 0.68);

        &:hover {
          background-color: #df3734;
          transform: translateY(1px);
          transition: 0.2s;
        }
      }

      svg {
        margin-left: 8px;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .banner {
      background-image: url(${imgBanner});
      background-position: 100% 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      height: 100vh;
      max-width: 100%;

      opacity: 0.9;
      z-index: 1;
    }

    .title {
      width: 100%;

      margin-top: 50px;
      padding: 15px 5px;
      border-radius: 15px;

      h1 {
        font-size: 25px;
        color: #000;
      }
      p {
        font-size: 17px;
      }

      .button {
        width: 50%;
        margin: 10px auto 0 auto;
        a {
          font-size: 16px;
        }

        svg {
          margin-left: 8px;
          font-size: 15px;
        }
      }
    }
  }
`;