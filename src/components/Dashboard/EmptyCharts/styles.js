import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 2.3rem;
    width: 32rem;
    text-align: center;
    font-weight: 400;
    line-height: 1.5;
    color: #888888;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 680px) {
    > h2 {
      width: 28rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    > h2 {
      width: 20rem;
      font-size: 1.75rem;
    }
  }
`;
