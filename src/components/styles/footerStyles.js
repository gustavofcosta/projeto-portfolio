import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.textSecondary};
  gap: 6rem;

  @media screen and (min-width: 800px) {
    padding: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1rem;
  }
`;

export const WrapperOne = styled.div`
  display: grid;
  gap: 6rem;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }

  div:nth-child(1) > div {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    max-width: 400px;

    ul {
      display: flex;
      gap: 1.1rem;

      a {
        transition: var(--transition);
        color: ${({ theme }) => theme.textPrimary};

        :hover {
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }

    span {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.textSecondary};
      font-family: var(--signature);
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;

    div {
      display: grid;
      h3 {
        color: ${({ theme }) => theme.textPrimary};
        font-size: 1.2rem;
      }

      a {
        color: ${({ theme }) => theme.textSecondary};
        font-size: 1rem;
        transition: var(--transition);

        :hover {
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }
  }
`;

export const WrapperTwo = styled.div`
  display: grid;
  gap: 6rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 6rem;

    figure {
      margin-left: 10rem;
    }

    div {
      margin-right: 1rem;
    }
  }

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme.textPrimary};
      font-size: 1.1rem;
    }

    figure {
      width: 140px;
      max-width: 350px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    a {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 1rem;
      transition: var(--transition);
      text-transform: capitalize;

      :hover {
        color: ${({ theme }) => theme.mainColor};
      }
    }
  }

  div:nth-child(2) {
    p {
      font-size: 1rem;
    }
  }
`;
