import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  position: relative;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.bgPrimary};
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 32px;
  }

  h3 {
    font-size: 14px;
  }

  p {
    max-width: 700px;
    font-size: 18px;
    letter-spacing: .8px;
  }
`;
