import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  position: relative;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.bgPrimary};
  padding: 2rem 0.5rem;
  margin-bottom: 4rem;
`;

export const SkillsStyles = styled.section`
  display: grid;
  gap: 1.5rem;
  overflow-x: scroll;
  padding: 6rem 1rem 3rem 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    width: -8rem;

    button {
      display: none;
    }
  }

  article {
    display: grid;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bgThird};
    box-shadow: 3px 2px 13px -2px rgba(0, 0, 0, 0.71);
    border-radius: 0.5rem;
    border: 3px solid ${({ theme }) => theme.bgThird};
    transition: var(--transition);

    @media screen and (min-width: 800px) {
      min-width: 16rem;
      min-height: 10rem;
    }

    :hover {
      border: 3px solid ${({ theme }) => theme.alternativeColor};
    }

    figure {
      color: ${({ theme }) => theme.alternativeColor};
      font-size: 4.5rem;
    }
  }
`;

export const ArrowLeft = styled.button`
  border-radius: 50%;
  height: 3.7rem;
  width: 3.7rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  transition: var(--transition);
  margin-right: 3rem;
  display: none;

  @media screen and (min-width: 800px) {
    display: inline;
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }
`;

export const ArrowRight = styled.button`
  border-radius: 50%;
  height: 3.7rem;
  width: 3.7rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  transition: var(--transition);
  display: none;

  @media screen and (min-width: 800px) {
    display: inline;
  }

  :hover {
    border: 2px solid ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }
`;
