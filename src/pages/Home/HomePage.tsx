import Card from "@/components/Card/Card";
import CardCalendar from "@/components/Card/CardCalendar/CardCalendar";
import CardCustom from "@/components/Card/CardCustom/CardCustom";
import CardMemo from "@/components/Card/CardMemo/CardMemo";
import CardTodoList from "@/components/Card/CardTodoList/CardTodoList";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import { userState } from "@/store/user";
import { useToggleSidebar } from "@/utils/hooks/toggleSidebar";
import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useRecoilValue } from "recoil";
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

const SERV_MODE = {
  MAIN: 'MAIN',
  CAL: 'CAL',
  MEMO: 'MEMO',
  TODO: 'TODO',
  CUSTOM: 'CUSTOM'
} as const;

type SERV_MODE = typeof SERV_MODE[keyof typeof SERV_MODE];

const HomePage = () => {
  const user = useRecoilValue(userState);
  const { toggleSidebar, stateSidebar, xPosition } = useToggleSidebar();
  const [stateMode, setStateMode] = useState(SERV_MODE.MAIN);

  return (
    <StyledHome>
      {stateMode === SERV_MODE.MAIN
        ?
        <StyledModeSelectContainer>
          <Card>
            <CardCalendar />
          </Card>
          <Card>
            <CardMemo />
          </Card>
          <Card>
            <CardTodoList />
          </Card>
          <Card>
            <CardCustom />
          </Card>
        </StyledModeSelectContainer>
        :
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
      }
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModeSelectContainer = styled.div`
  display: flex;
  width:100%;
  justify-content: space-around;
  align-items: center;
`;

const StyledItemContainer = styled.div`
  
  
  /* display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  gap: 0.5em 1em; */
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

export default HomePage;