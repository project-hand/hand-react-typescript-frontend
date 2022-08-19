
import Avatar from "@/components/Avatar/Avatar";
import WeekCalendar from "@/components/WeekCalendar/WeekCalendar";
import { userState } from "@/store";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const UserProfile = () => {
  const user = useRecoilValue(userState);
  console.log(user);
  return (
    <>
      <StyledUserProfileContainer>
        <Avatar image={user?.profileImage} />
        <div>
          {user?.name}
        </div>
        <div>
          {user?.email}
        </div>
      </StyledUserProfileContainer>
      <WeekCalendar schedule={user?.schedule} />
    </>
  );
};

const StyledUserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export default UserProfile;