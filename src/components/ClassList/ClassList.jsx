import css from '../ClassList/ClassList.module.css';
import Class from '../Class/Class';

export default function ClassList({ openSideBar }) {
  return (
    <ul className={`${css.classList} ${!openSideBar && css.classListExpanded}`}>
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
