import { userState } from '@/store/user';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface RequireAuthProps {
  children: React.ReactNode;
}

const AuthRouter = ({ children }: RequireAuthProps) => {
  const user = useRecoilValue(userState);

  if (user?.refreshToken) {
    return <>{children}</>;
  } else {
    return <Navigate to="/landing" />;
  }
};

export default AuthRouter;