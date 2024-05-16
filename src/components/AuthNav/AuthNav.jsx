import css from './AuthNav.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>EduHub📚</h1>
      <NavLink className={buildLinkClass} to="/register">
        Реєстрація
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Вхід
      </NavLink>
    </div>
  );
};
