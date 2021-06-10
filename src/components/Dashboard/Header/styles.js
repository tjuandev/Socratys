import styled from "styled-components";

export const Container = styled.header`
  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .hexLogo {
    margin-right: 0.5rem;
  }

  @media (max-width: 680px) {
    .hexLogo {
      width: 4rem;
    }
  }

  @media (max-width: 430px) {
    .hexLogo {
      width: 3.5rem;
    }

    .text {
      display: none;
    }
  }

  .searchBarContainer {
    background: rgba(111, 122, 132, 0.08);
    border-radius: 3rem;
    width: 16rem;
    height: 2.5rem;
    padding: 0 1rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    > img {
      margin-right: 0.5rem;
    }

    > input {
      background: transparent;
      width: 100%;

      :focus {
        outline: none;
      }
    }
  }
`;

export const SearchBarContainer = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  .box {
    width: 3rem;
    height: 3rem;
    background: rgba(111, 122, 132, 0.08);
    transition: 0.5s;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -10px 11px 30px -12px rgba(0, 0, 0, 0.3);
  }

  .box > label {
    width: 3rem;
    height: 3rem;
    padding-right: 1.5rem;
    line-height: 60px;

    text-align: center;
    cursor: pointer;
    color: gray;
    transition: 0.5s;
  }

  .box > label:hover {
    transform: scale(1.1);
  }

  .box input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    padding-left: 25px;
    color: gray;
    transition: 0.5s;
    opacity: 0;
  }

  .box input::placeholder {
    color: gray;
  }

  #check:checked + .box {
    width: 500px;
    box-shadow: -10px 11px 40px -15px rgba(0, 0, 0, 0.25);
  }

  #check:checked + .box > input {
    opacity: 1;
  }

  @media (max-width: 780px) {
    #check:checked + .box {
      width: 400px;
    }
  }

  @media (max-width: 680px) {
    #check:checked + .box {
      width: 300px;
    }
  }

  @media (max-width: 580px) {
    #check:checked + .box {
      width: 200px;
    }
  }
`;
