// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRouter from '@/routes/Auth';
import HomePage from '@/pages/Home/HomePage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import LandingPage from './pages/Landing/LandingPage';
import { useLogin } from './utils/hooks/login';
// import { useLogin } from '@/features/auth';
// import { LoadingSpinner } from '@/components/LoadingSpinner';

// const HomePage = lazy(() => import('@/pages/HomePage'));
// const FeedMapPage = lazy(() => import('@/pages/FeedMapPage'));
// const SearchPage = lazy(() => import('@/pages/SearchPage'));
// const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
// const ProfileEditPage = lazy(() => import('@/pages/ProfileEditPage'));
// const AdminPage = lazy(() => import('@/pages/AdminPage'));
// const LoginPage = lazy(() => import('@/pages/LoginPage'));

const AppRouter = () => {
  const { isLoading } = useLogin();
  if (!isLoading) return <div></div>;
  return (
    // <Suspense fallback={<LoadingSpinner />}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRouter>
              <HomePage />
            </AuthRouter>
          }
        />
        <Route path="/landing" element={
          <LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;