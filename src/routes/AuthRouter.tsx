import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface RequireAuthProps {
  children: React.ReactNode;
}

const AuthRouter = ({ children }: RequireAuthProps) => {
  const user = 'something..';

  if (user === null) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default AuthRouter;