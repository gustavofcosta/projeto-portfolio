import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  position: relative;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.bgPrimary};

  h1 {
    font-family: var(--title-name);
    color: ${({ theme }) => theme.mainColor};
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    text-align: center;
    text-transform: uppercase;
  }

  h3 {
    color: ${({ theme }) => theme.textPrimary};
    text-align: center;
    text-transform: uppercase;
  }

  h4 {
    color: ${({ theme }) => theme.textPrimary};
    text-transform: uppercase;
    font-size: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    text-align: center;
    font-size: 1.4rem;
  }
`;
