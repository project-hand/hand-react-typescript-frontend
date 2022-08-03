import styled from "styled-components";

interface LoginFormProps {
  children?: React.ReactNode;
}

const LoginForm = ({ children }: LoginFormProps) => {
  return <StyledLoginForm>{children}</StyledLoginForm>;
};

const StyledLoginForm = styled.div`
  
`;

export default LoginForm;

