import styled from "styled-components";
import UserProfile from "./UserProfile/UserProfile";

const ProfilePage = () => {
  return (
    <StyledProfileContainer>
      <UserProfile />
    </StyledProfileContainer>
  );
};

const StyledProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export default ProfilePage;