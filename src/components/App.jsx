import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Layout from './Layout/Layout';

import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AuthorizedUserPage from '../pages/AuthorizedUserPage/AuthorizedUserPage';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import ClassPage from '../pages/ClassPage/ClassPage';
// import TaskDetailsPage from '../pages/TaskDetailsPage/TaskDetailsPage';
// import RatingPage from '../pages/RatingPage/RatingPage';
// import ClassStudentsPage from '../pages/ClassStudentsPage/ClassStudentsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/authorized" element={<AuthorizedUserPage />}>
          <Route path="classes" element={<ClassesPage />}></Route>
          <Route path="classes/:classId" element={<ClassPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
