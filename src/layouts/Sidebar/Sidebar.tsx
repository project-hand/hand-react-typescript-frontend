import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { StyledSidebar, StyledSidebarBtn, StyledSidebarBtnWrap, StyledSidebarContent } from "./Sidebar.style";
import { SidebarProps } from "@/types/sidebarProps";

const Sidebar = ({ handleSidbar, state, xPosition, children }: SidebarProps) => {
  return (
    <StyledSidebar xPosition={xPosition}>
      <StyledSidebarBtnWrap>
        <StyledSidebarBtn onClick={(e) => handleSidbar(e)}>
          {state ?
            <FaAngleRight />
            :
            <FaAngleLeft />}
        </StyledSidebarBtn>
      </StyledSidebarBtnWrap>
      <StyledSidebarContent>
        {children}
      </StyledSidebarContent>
    </StyledSidebar>
  );
};

export default Sidebar;