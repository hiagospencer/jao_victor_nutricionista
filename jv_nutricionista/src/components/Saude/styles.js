import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #1b2425;
  height: 100%;
  padding: 50px 0;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    padding: 20px 0;
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

  p {
    text-align: center;
    color: #1b2425;
    font-family: "Questrial", Sans-serif;
    font-size: 19px;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    h3 {
      margin-top: 15px;
      font-size: 25px;
    }

    p {
      font-size: 16px;
      padding: 0 5%;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

export const GridImportancia = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 10px auto 0 auto;
  gap: 10px;
`;
