import styled from "styled-components";

export const ServicesStyles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 1rem;

  @media screen and (min-width: 970px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  article {
    padding: 2rem;
    background-color: ${({ theme }) => theme.bgThird};
    box-shadow: 6px 3px 15px -2px rgba(0, 0, 0, 0.71);
    border-radius: 0.5rem;
    border: 3px solid ${({ theme }) => theme.bgThird};
    transition: var(--transition);

    :hover {
      border: 3px solid ${({ theme }) => theme.alternativeColor};
    }

    figure {
      color: ${({ theme }) => theme.alternativeColor};
      font-size: 3.8rem;
    }

    h3 {
      font-size: 1.1rem;
      padding-bottom: 2rem;
      /* color: ${({ theme }) => theme.textTitle}; */
    }

    p {
      font-size: 1.1rem;
      /* color: ${({ theme }) => theme.textBase}; */
    }
  }
`;
