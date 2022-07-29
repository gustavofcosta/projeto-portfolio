import styled from "styled-components";

export const SkillsStyles = styled.section`
  display: grid;
  gap: 1.5rem;
  overflow-x: scroll;
  padding: 6rem 1rem 3rem 1rem;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: flex-start;
    width: -10rem;

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
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 10rem;
      min-height: 10rem;
    }

    :hover {
      border: 3px solid ${({ theme }) => theme.alternativeColor};
    }

    figure {
      color: ${({ theme }) => theme.alternativeColor};
      font-size: 3.8rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const ArrowLeft = styled.button`
  border-radius: 50%;
  height: 3.1rem;
  width: 3.1rem;
  font-size: 1.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  transition: var(--transition);
  margin-right: 3rem;
  display: none;

  :hover {
    border: 2px solid ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;

export const ArrowRight = styled.button`
  border-radius: 50%;
  height: 3.1rem;
  width: 3.1rem;
  font-size: 1.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  transition: var(--transition);
  display: none;

  :hover {
    border: 2px solid ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    display: inline;
  }
`;
