import css from './TaskNav.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function TaskNav() {
  return (
    <div className={css.navigation}>
      <ul className={css.navigationList}>
        <li>
          <NavLink className={buildLinkClass} to="tasks">
            Стрічка
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="rating">
            Оцінки
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="students">
            Люди
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
