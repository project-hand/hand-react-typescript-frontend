import Card from "@/components/Card/Card";
import CardCalendar from "@/components/Card/CardCalendar/CardCalendar";
import CardCustom from "@/components/Card/CardCustom/CardCustom";
import CardMemo from "@/components/Card/CardMemo/CardMemo";
import CardTodoList from "@/components/Card/CardTodoList/CardTodoList";
import { userState } from "@/store/user";
import { useRecoilValue } from "recoil";
import styled from "styled-components";


const HomePage = () => {
  const user = useRecoilValue(userState);

  console.log(user);


  return (
    <StyledHome>
      <StyledHome>
        <StyledModeSelectContainer>
          <Card to="/calendar" >
            <CardCalendar />
          </Card>
          <Card to="/memo">
            <CardMemo />
          </Card>
          <Card to="/todo">
            <CardTodoList />
          </Card>
          <Card to="/custom">
            <CardCustom />
          </Card>
        </StyledModeSelectContainer>
      </StyledHome>
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

export default HomePage;