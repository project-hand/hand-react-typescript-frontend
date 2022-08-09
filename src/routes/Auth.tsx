import Main from '@/layouts/Main/Main';
import { userState } from '@/store';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface RequireAuthProps {
  children: React.ReactNode;
}

const AuthRouter = ({ children }: RequireAuthProps) => {
  const user = useRecoilValue(userState);

  if (user?.refreshToken) {
    return (
      <Main>
        {children}
      </Main>
    );
  } else {
    return <Navigate to="/landing" />;
  }
};

export default AuthRouter;