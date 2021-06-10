import styled from "styled-components";

export const Container = styled.div`
  button {
    border-radius: 50%;
    height: 1.35rem;
    width: 1.35rem;
    position: relative;

    margin-right: 0.65rem;
    cursor: pointer;

    :focus {
      outline: none;
    }

    > span {
      color: #f4f4f4;
    }

    :hover {
      opacity: 0.5;
    }
  }

  .active {
    > img {
      display: visible;
      height: 1.45rem;
      width: 1.45rem;
      position: absolute;
      top: -0.8px;
      left: -0.7px;
      border-radius: 50%;
    }
  }

  .deactive {
    > img {
      display: none;
    }
  }

  button:last-child {
    margin-right: 0;
  }
`;
