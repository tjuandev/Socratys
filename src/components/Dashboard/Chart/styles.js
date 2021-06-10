import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  background: #fff;
  border-radius: 15px;

  margin: 2rem 0;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem 1rem 1rem;
    .chartIconsContainer {
      display: flex;

      .chartButton {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        cursor: pointer;

        :first-child {
          margin-right: 0.75rem;
        }

        > img {
          margin: auto;
        }

        :hover {
          opacity: 0.7;
        }
      }
    }
  }

  > main > legend {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    .box {
      border-radius: 50%;
      width: 0.85rem;
      height: 0.85rem;
      background: red;

      margin-right: 0.25rem;
    }

    > span {
      font-size: 0.85rem;
    }

    .first {
      margin-right: 0.4rem;
    }
  }
`;
