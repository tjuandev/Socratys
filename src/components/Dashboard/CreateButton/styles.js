import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;

  height: 3rem;
  width: 3rem;
  background: #46b5fb;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: opacity 0.25s ease-in;

  :hover {
    opacity: 0.7;
  }
`;
