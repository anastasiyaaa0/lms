import css from './LoginPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <section className={css.container}>
        <img
          src="../../../public/img/students_login.png"
          alt="students"
          className={css.img}
        ></img>
        <div>
          <LoginForm />

          <h2 className={css.text}>
            Ще немає облікового запису?&#32;
            <span>
              <NavLink className={css.link} to="/register">
                Зареєструватися
              </NavLink>
            </span>
          </h2>
        </div>
      </section>
    </>
  );
}
