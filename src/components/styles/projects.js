import styled from "styled-components";

export const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 3rem 1rem;

  @media screen and (min-width: 1316px) {
    margin: 0 4rem;
  }

  @media screen and (max-width: 1173px) {
    article:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 791px) {
    article:nth-child(3) {
      display: block;
    }
  }

  article {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    transition: var(--transition);

    :hover {
      border: 1px solid ${({ theme }) => theme.borderColor};
    }

    figure {
      height: 10rem;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      border-radius: inherit;
    }

    h3 {
      font-size: 1.1rem;
      margin-top: 1.5rem;
    }

    p {
      margin: 1.5rem 0;
      font-size: 1.1rem;
      /* color: ${({ theme }) => theme.textBase}; */
    }

    div {
      display: flex;
      justify-content: center;

      button:nth-child(1) {
        margin-right: 2rem;
      }
    }
  }
`;
