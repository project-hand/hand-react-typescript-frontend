import Sidebar from "@/layouts/Sidebar/Sidebar";
import { userState } from "@/store/user";
import { useToggleSidebar } from "@/utils/hooks/toggleSidebar";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const { toggleSidebar, stateSidebar, xPosition } = useToggleSidebar();
  console.log(user);

  return (
    <>
      <div>main home!</div>
      <Sidebar handleSidbar={toggleSidebar} state={stateSidebar} xPosition={xPosition} >
        <Temp />
        <Temp />
      </Sidebar>
    </>
  );
};

const Temp = styled.div`
  width: 70px;
  height: 70px;
  background-color: blue;
  border-radius: 15px;
`;

export default HomePage;