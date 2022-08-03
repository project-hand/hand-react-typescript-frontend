import Button from "@/components/Button/Button";
import { userState } from "@/store/user";
import { useLogout } from "@/utils/hooks";
import { useRecoilValue } from "recoil";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const { logout } = useLogout();

  console.log(user);

  const onLogout = async () => {
    await logout();
  };

  return (
    <>
      <div>HOzzME!</div>
      <Button size={"xlg"} disabled={false} variant={'warning'} onClickHandler={onLogout}>
        로그아웃
      </Button>
    </>
  );
};

export default HomePage;