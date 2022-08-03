import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState } from '@/store';
import { logOut } from '@/api';


export const useLogout = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  async function logout() {
    await logOut();
    setUser(null);
    navigate('/landing');
  }

  return logout;
};
