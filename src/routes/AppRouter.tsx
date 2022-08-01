// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRouter from '@/routes/AuthRouter';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
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
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;