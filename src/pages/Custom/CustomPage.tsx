import Sidebar from "@/layouts/Sidebar/Sidebar";
import { useToggleSidebar } from "@/utils/hooks/toggleSidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";

const mock = {
  usingItem: [
    {
      index: 1,
      name: 'calendar',
    },
    {
      index: 2,
      name: 'memo'
    },
    {
      index: 3,
      name: 'todo'
    }
  ],
  sidebarItem: [
    {
      index: 1,
      name: 'test'
    },
    {
      index: 2,
      name: 'test2'
    },
    {
      index: 3,
      name: 'weather'
    }
  ]
};

const CustomPage = () => {
  const { toggleSidebar, stateSidebar, xPosition } = useToggleSidebar();

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledItemContainer>
        {mock.usingItem.map(({ name }) => {
          return <StyledUsingItem>{name}</StyledUsingItem>;
        })}
      </StyledItemContainer>
      <Sidebar handleSidbar={toggleSidebar} state={stateSidebar} xPosition={xPosition} >
        {mock.sidebarItem.map(({ name }) => {
          return <StyledSidebarItem>{name}</StyledSidebarItem>;
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