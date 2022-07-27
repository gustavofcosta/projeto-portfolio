import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 12vh;
  color: ${({ theme }) => theme.textSecondary};
  max-width: var(--max-width);

  span,
  div {
    display: flex;
    gap: 1rem;
  }

  div figure {
    border-radius: 50%;
    height: 3.1rem;
    width: 3.1rem;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.textPrimary};
    transition: var(--transition);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    :hover {
      border: 2px solid ${({ theme }) => theme.mainColor};
    }
  }

  div button {
    display: none;

    @media screen and (min-width: 1100px) {
      display: flex;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: none;

    @media screen and (min-width: 1100px) {
      display: flex;
      align-items: center;
      gap: 1.8rem;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 1.3rem;

      a {
        color: ${({ theme }) => theme.textSecondary};
        transition: var(--transition);

        :hover {
          cursor: pointer;
          color: ${({ theme }) => theme.mainColor};
        }
      }
    }
  }

  span {
    display: flex;

    @media screen and (min-width: 1100px) {
      display: none;
    }
  }
`;
