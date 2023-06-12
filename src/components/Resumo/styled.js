import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  position: relative;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.bgPrimary};
  
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  
  p{
    font-size: 17px;
    letter-spacing: .8px;
  }
`;
