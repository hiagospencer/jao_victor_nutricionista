import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #474242;
  padding: 8px 0;

  color: #eee;

  h3,
  h4 {
    font-size: 17px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;

    a {
      text-decoration: none;
      color: #eee;
      font-size: 17px;
      font-style: italic;
      margin-left: 4px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 15px 3%;
    text-align: center;

    h3 {
        margin-bottom: 20px;
    }
  }

`;
