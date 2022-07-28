import styled from "styled-components";

export const Wrapper = styled.nav`
  display: ${({ sidebar }) => {
    return sidebar ? "none" : "false";
  }};
  position: absolute;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.bgPrimary};
  width: 100%;
  height: 100%;

  @media screen and (min-width: 500px) {
  }

  div:first-child {
    border-top: 1px solid ${({ theme }) => theme.textSecondary};

    ul:nth-child(1) {
      display: grid;
      li {
        height: 5.5rem;
        padding-left: 2.5rem;
        transition: var(--transition);

        :hover {
          background-color: ${({ theme }) => theme.bgSecondary};
        }
      }

      a {
        color: ${({ theme }) => theme.textPrimary};
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 1rem;
        text-transform: capitalize;
      }

      span {
        display: block;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
      }
    }
  }
`;

export const Social = styled.div`
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2rem;
  }

  li {
    padding: 2.5rem 0;
  }

  a {
    transition: var(--transition);
    color: ${({ theme }) => theme.textPrimary};

    :hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;
