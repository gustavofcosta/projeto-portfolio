import styled from "styled-components";

export const SkillsStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 6rem 1rem 3rem 1rem;

  article {
    display: grid;
    align-items: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bgThird};
    box-shadow: 3px 2px 13px -2px rgba(0, 0, 0, 0.71);
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
    }

    p {
      font-size: 1.1rem;
    }
  }
`;
