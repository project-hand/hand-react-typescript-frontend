import { useLogout } from "@/utils/hooks";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { RiLogoutBoxRLine } from "@react-icons/all-files/ri/RiLogoutBoxRLine";
import { BiSearchAlt2 } from "@react-icons/all-files/bi/BiSearchAlt2";

const HeaderNav = ({ onToggleSearch }) => {
  const { logout } = useLogout();

  const onLogout = async () => {
    await logout();
  };

  return (
    <StyledHeaderNav>
      <StyledNavItem>
        <BiSearchAlt2 onClick={onToggleSearch} />
      </StyledNavItem>
      <StyledLink to="/">
        <HiOutlineHome />
      </StyledLink>
      <StyledLink to="/profile">
        <FaRegUserCircle />
      </StyledLink>
      <StyledNavItem>
        <RiLogoutBoxRLine onClick={() => onLogout()} />
      </StyledNavItem>
    </StyledHeaderNav>
  );
};


const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

const StyledLink = styled(NavLink)`
  font-size: 2.5rem;
  color: #525252;
  &:visited{
    color: #525252;
  }

  &:hover{
    color: #000
  }
`;

const StyledNavItem = styled.button`
  font-size: 2.5rem;
  color: #525252;
  &:visited{
    color: #525252;
  }

  &:hover{
    color: #000
  }
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;  
  background-color: transparent;
`;

export default HeaderNav;