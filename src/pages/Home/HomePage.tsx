import { userState } from "@/store/user";
import { useRecoilValue } from "recoil";

const HomePage = () => {
  const user = useRecoilValue(userState);
  console.log(user);

  return (
    <div>HOzzME!</div>
  );
};

export default HomePage;