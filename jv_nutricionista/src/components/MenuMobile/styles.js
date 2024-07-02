import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  backdrop-filter: blur(3px);

  background: rgba(157, 169, 151, 0.95);

  background: linear-gradient(
    45deg,
    rgba(4, 30, 49, 0.95) 45%,
    rgba(9, 214, 229, 0.45) 85%
  );

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
    color: white;
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    transform: scale(1);
    transition: 0.2s;
  }

  ${({ menuIsVisible }) =>
    menuIsVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
      ul {
        transform: scale(1.4);
      }
    `}
`;
