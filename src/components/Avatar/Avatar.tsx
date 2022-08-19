import styled from "styled-components";

const Avatar = ({ image }) => {
  console.log(image);

  return (
    <StyledAvatar src={image} alt="user avatar" />
  );
};

const StyledAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 99%;
`;

export default Avatar;