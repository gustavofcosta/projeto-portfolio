import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid ${({ theme }) => theme.textPrimary};
  transition: var(--transition);
  font-size: 18px;

  :hover {
    border: 2px solid ${({ theme }) => theme.mainColor};
    cursor: pointer;
  }
`;

function ButtonIcons({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default ButtonIcons;
