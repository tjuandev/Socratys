import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      margin-bottom: 1rem;
    }

    > p {
      font-size: 1.1rem;
      font-weight: lighter;
      color: #6f7a84;
      width: 60%;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  .bubble_blue {
    position: absolute;
    left: 20%;
    top: -2.86%;
    bottom: 77.75%;

    width: 25%;
  }

  .bubble_pink {
    position: absolute;
    left: 81.5%;
    top: 0%;
    bottom: 61.41%;
    width: 25%;
  }

  .bubble_purple {
    position: absolute;
    left: 0%;
    top: 58.97%;
    bottom: -20.8%;
    width: 30%;
  }

  @media (max-width: 1100px) {
    .bubble_purple {
      left: 0%;
      top: 65.97%;
      bottom: -20.8%;
      width: 35%;
    }
  }

  @media (max-width: 880px) {
    .bubble_purple {
      left: 0%;
      top: 70.97%;
      bottom: -20.8%;
      width: 35%;
    }
  }

  @media (max-width: 768px) {
    .bubble_purple {
      left: 0%;
      top: 75.97%;
      bottom: -20.8%;
      width: 35%;
    }
  }

  @media (max-width: 610px) {
    .bubble_blue {
      left: 15%;
      width: 35%;
    }

    .bubble_pink {
      left: 75.5%;
      width: 35%;
    }

    .bubble_purple {
      left: 0%;
      top: 80.97%;
      bottom: -20.8%;
      width: 45%;
    }
  }

  @media (max-width: 500px) {
    .bubble_blue {
      left: 10%;
      width: 45%;
    }

    .bubble_pink {
      left: 65.5%;
      width: 45%;
    }

    .bubble_purple {
      left: 0%;
      top: 75%;
      bottom: -20.8%;
      width: 50%;
    }
  }

  @media (min-height: 600px) and (max-width: 600px) {
    .bubble_pink {
      left: 65.5%;
      width: 45%;
    }

    .bubble_purple {
      left: 0%;
      top: 90%;
      bottom: -20.8%;
      width: 90%;
    }
  }
`;
