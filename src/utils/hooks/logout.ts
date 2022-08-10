import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState } from '@/store';
import { logOut } from '@/api';

export const useLogout = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const logout = async () => {
    if (!confirm('로그아웃 하시겠습니까?')) {
      return;
    }

    try {
      await logOut();
      setUser(null);
      navigate('/landing');
    } catch (e) {
      console.error(e);
    }
  };

  return { logout };
};
