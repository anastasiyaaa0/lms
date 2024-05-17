import { Routes, Route, Navigate } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Layout from './Layout/Layout';

import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AuthorizedUserPage from '../pages/AuthorizedUserPage/AuthorizedUserPage';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import ClassPage from '../pages/ClassPage/ClassPage';
import TasksPage from '../pages/TasksPage/TasksPage';
import TaskDetailsPage from '../pages/TaskDetailsPage/TaskDetailsPage';
import RatingPage from '../pages/RatingPage/RatingPage';
import ClassStudentsPage from '../pages/ClassStudentsPage/ClassStudentsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/authorized" element={<AuthorizedUserPage />}>
          <Route index element={<Navigate to="classes" replace />} />
          <Route path="classes" element={<ClassesPage />}></Route>
          <Route path="classes/:classId" element={<ClassPage />}>
            <Route index element={<Navigate to="tasks" replace />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="rating" element={<RatingPage />} />
            <Route path="students" element={<ClassStudentsPage />} />
          </Route>
          <Route
            path="classes/:classId/details"
            element={<TaskDetailsPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
