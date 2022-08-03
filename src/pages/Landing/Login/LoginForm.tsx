import styled from "styled-components";

interface LoginFormProps {
  children?: React.ReactNode;
}

const LoginForm = ({ children }: LoginFormProps) => {
  return <StyledLoginForm>{children}</StyledLoginForm>;
};

const StyledLoginForm = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media only screen and (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }
`;

export default LoginForm;

