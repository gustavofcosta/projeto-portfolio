import styled from "styled-components";

export const BgAlternative = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 2rem 0.5rem;
  border-radius: 0.4rem;
  margin-bottom: 4rem;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
