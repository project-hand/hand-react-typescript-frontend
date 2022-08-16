import Sidebar from "@/layouts/Sidebar/Sidebar";
import { itemAtom } from "@/store/item";
import { useToggleSidebar } from "@/utils/hooks/toggleSidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const CustomPage = () => {
  const { toggleSidebar, stateSidebar, xPosition } = useToggleSidebar();
  const [itemState, setItemState] = useRecoilState(itemAtom);

  console.log(itemState);


  return (
    <DndProvider backend={HTML5Backend}>
      <StyledItemContainer>
        {itemState.usingItem.map(({ item }) => {
          return <StyledUsingItem>{item}</StyledUsingItem>;
        })}
      </StyledItemContainer>
      <Sidebar handleSidbar={toggleSidebar} state={stateSidebar} xPosition={xPosition} >
        {itemState.sidebarItem.map(({ item }) => {
          return <StyledSidebarItem>{item}</StyledSidebarItem>;
        })}
      </Sidebar>
    </DndProvider>
  );
};


const StyledItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 0.5em 1em;
`;

const StyledUsingItem = styled.div.attrs({
  draggable: 'true'
})`
  width: 250px;
  height: 250px;
  background-color: #eee;
  border-radius: 15px;
  resize: both;
  overflow: auto;
`;

const StyledSidebarItem = styled.div.attrs({
  draggable: 'true'
})`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 15px;
`;


export default CustomPage;