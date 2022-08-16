// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRouter from '@/routes/Auth';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { useLogin } from '@/utils/hooks';
import Main from '@/layouts/Main/Main';

const HomePage = lazy(() => import('@/pages/Home/HomePage'));
const LandingPage = lazy(() => import('@/pages/Landing/LandingPage'));
const ProfilePage = lazy(() => import('@/pages/Profile/ProfilePage'));
const CalendarPage = lazy(() => import('@/pages/Calendar/CalendarPage'));
const MemoPage = lazy(() => import('@/pages/Memo/MemoPage'));
const TodoPage = lazy(() => import('@/pages/Todo/TodoPage'));
const CustomPage = lazy(() => import('@/pages/Custom/CustomPage'));
const TermsPage = lazy(() => import('@/pages/Terms/TermsPage'));

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
              path="/calendar"
              element={
                <AuthRouter>
                  <CalendarPage />
                </AuthRouter>
              }
            />
            <Route
              path="/memo"
              element={
                <AuthRouter>
                  <MemoPage />
                </AuthRouter>
              }
            />
            <Route
              path="/todo"
              element={
                <AuthRouter>
                  <TodoPage />
                </AuthRouter>
              }
            />
            <Route
              path="/custom"
              element={
                <AuthRouter>
                  <CustomPage />
                </AuthRouter>
              }
            />
            <Route
              path="/terms"
              element={
                <AuthRouter>
                  <TermsPage />
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