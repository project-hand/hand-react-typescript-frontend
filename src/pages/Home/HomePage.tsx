import Sidebar from "@/layouts/Sidebar/Sidebar";
import { userState } from "@/store/user";
import { useToggleSidebar } from "@/utils/hooks/toggleSidebar";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const mock = {
  usingItem: [
    {
      index: 1,
      name: 'calendar'
    },
    {
      index: 2,
      name: 'memo'
    },
    {
      index: 3,
      name: 'todo'
    },
    {
      index: 4,
      name: 'weather'
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
    }
  ]
};

const HomePage = () => {
  const user = useRecoilValue(userState);
  const { toggleSidebar, stateSidebar, xPosition } = useToggleSidebar();

  return (
    <StyledHome>
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
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledItemContainer = styled.div`
  
`;

const StyledUsingItem = styled.div.attrs({
  draggable: 'true'
})`
  width: 300px;
  height: 300px;
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