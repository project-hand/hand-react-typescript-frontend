import Button from "@/components/Button/Button";
import { useLogout } from "@/utils/hooks";
import styled from "styled-components";


const HeaderNav = () => {
  const { logout } = useLogout();
  const onLogout = async () => {
    await logout();
  };
  return (
    <StyledHeaderNav>
      <Button size={"lg"} disabled={false} variant={'warning'} onClickHandler={onLogout}>
        로그아웃
      </Button>
    </StyledHeaderNav>
  );
};


const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeaderNav;