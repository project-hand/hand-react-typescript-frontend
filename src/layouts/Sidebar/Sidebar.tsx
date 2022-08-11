import styled from "styled-components";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";

const Sidebar = ({ handleSidbar, state, xPosition, children }) => {
  console.log(xPosition);

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

const StyledSidebar = styled.div<{ xPosition: number; }>`
  position: fixed;
  right: 0;
  display: flex;
  height: 500px;
  width: 140px;
  transform: translateX(${props => props.xPosition}px);
  transition: transform 300ms ease-out;
`;

const StyledSidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSidebarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 2rem;
  padding:0;
  margin: 0;
  background-color: #eee;
  border: none;
  border-top-left-radius:10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

const StyledSidebarContent = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export default Sidebar;