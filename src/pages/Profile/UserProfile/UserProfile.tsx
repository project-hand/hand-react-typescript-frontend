
import Avatar from "@/components/Avatar/Avatar";
import WeekCalendar from "@/components/WeekCalendar/WeekCalendar";
import { userState } from "@/store";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const UserProfile = () => {
  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <StyledUserProfileContainer>
      <StyledProfile>
        <Avatar image={user?.profileImage} size={'md'} kind={'circle'} />
        <StyledUserInfo>
          <div>
            {user?.name}
          </div>
          <div>
            {user?.email}
          </div>
        </StyledUserInfo>
      </StyledProfile>
      <WeekCalendar schedule={user?.schedule} />
    </StyledUserProfileContainer>
  );
};

const StyledUserProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
`;

export default UserProfile;