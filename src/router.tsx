// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRouter from '@/routes/Auth';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useLogin } from '@/utils/hooks';
import Main from './layouts/Main/Main';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const LandingPage = lazy(() => import('@/pages/Landing/LandingPage'));
const ProfilePage = lazy(() => import('@/pages/Profile/ProfilePage'));
const SettingPage = lazy(() => import('@/pages/Setting/SettingPage'));

const AppRouter = () => {
  const { isLoading } = useLogin();
  if (!isLoading) return <div></div>;
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Routes>
          <Route element={<Main />}>
            <Route
              path="/"
              element={
                <AuthRouter>
                  <HomePage />
                </AuthRouter>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRouter>
                  <ProfilePage />
                </AuthRouter>
              }
            />
            <Route
              path="/setting"
              element={
                <AuthRouter>
                  <SettingPage />
                </AuthRouter>
              }
            />
          </Route>
          <Route path="/landing" element={
            <LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;