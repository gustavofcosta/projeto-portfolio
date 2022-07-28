import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: ${({ theme }) => theme.mainColor};
  font-size: 1.1rem;
  padding: 0.3rem 1.2rem;
  border: transparent;
  border-radius: 0.2rem;
  width: 7rem;
  transition: var(--transition);

  :hover {
    background-color: #02bd85;
    color: ${({ theme }) => theme.textBase};
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.textTitle};
  }
`;

const Button = ({ children, onClick }) => {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
};

export default Button;
