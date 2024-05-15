import { Routes, Route } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Layout from './Layout/Layout';

import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/classes"
              component={<RegistrationPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/classes" component={<LoginPage />} />
          }
        ></Route>
        <Route
          path="/classes"
          element={
            <PrivateRoute redirectTo="/login" component={<ClassesPage />} />
          }
        ></Route> */}
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/classes" element={<ClassesPage />}></Route>
        {/*  */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
