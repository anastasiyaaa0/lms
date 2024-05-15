import css from './RegistrationsPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { NavLink } from 'react-router-dom';

export default function RegistrationPage() {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <section className={css.container}>
        <img
          src="/img/students_register.png"
          alt="students"
          className={css.img}
        ></img>
        <div>
          <RegistrationForm />
          <h2 className={css.text}>
            Вже створений обліковий запис?&#32;
            <span>
              <NavLink className={css.link} to="/login">
                Увійти
              </NavLink>
            </span>
          </h2>
        </div>
      </section>
    </>
  );
}
