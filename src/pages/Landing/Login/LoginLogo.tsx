import styled from "styled-components";
import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";

const LoginLogo = () => {
  return <StyledLoginLogo>
    <FcCalendar />
  </StyledLoginLogo>;
};

const StyledLoginLogo = styled.div`
  font-size: 6rem;
  @media only screen and (min-width: 768px) {
    font-size: 7rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 8rem;
  }
`;

export default LoginLogo;

