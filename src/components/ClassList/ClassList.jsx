import css from '../ClassList/ClassList.module.css';
import Class from '../Class/Class';

import { useSelector } from 'react-redux';
import { selectIsSidebarOpen } from '../../redux/sidebar/selectors';

export default function ClassList() {
  const isOpenSideBar = useSelector(selectIsSidebarOpen);

  return (
    <ul
      className={`${css.classList} ${
        isOpenSideBar === false && css.classListExpanded
      }`}
    >
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
      <li className={css.classListItem}>
        <Class />
      </li>
    </ul>
  );
}
