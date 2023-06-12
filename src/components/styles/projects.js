import styled from "styled-components";

export const Projects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 6rem 1rem 3rem 1rem;

  @media screen and (max-width: 1058px) {
    article:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 714px) {
    article:nth-child(3) {
      display: block;
    }
  }

  article {
    padding: 2rem 0.5rem;
    border-radius: 0.2rem;
    transition: var(--transition);
    box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.41);
    background-color: ${({ theme }) => theme.bgThird};
    border: 3px solid ${({ theme }) => theme.bgThird};
  


    figure {
      height: 10rem;
      overflow: hidden;
      border-radius: 0.2rem;
    }

    img {
      width: 100%;
      object-fit: contain;
      border-radius: inherit;
      transition: var(--transition);

      :hover {
        transform: scale(1.2);
      }
    }

    h3 {
      font-size: .9rem;
      margin-top: 1.5rem;
    }

    p {
      margin: 1.5rem 0;
      font-size: 1rem;
      /* color: ${({ theme }) => theme.textBase}; */
    }

    .description{
      min-height: 120px;
    }

    button {
      font-size: 1rem;
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
