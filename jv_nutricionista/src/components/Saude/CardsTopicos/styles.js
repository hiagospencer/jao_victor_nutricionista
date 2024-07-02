import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  width: 32%;
  border-radius: 12px;
  padding: 15px 14px;

  &:hover {
    background-color: #041e31;
    transition: .4s;
    h2,
    p {
      color: #fff;
    }
  }
  > h2 {
    text-align: center;
    margin: 10px 0;
    color: #1b2425;
    font-size: 24px;
    font-style: italic;
  }

  > p {
    display: flex;
    margin-top: 15px;
    text-align: center;

    line-height: 1.1;
    color: #353f40;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 20px 2%;
  }
`;
