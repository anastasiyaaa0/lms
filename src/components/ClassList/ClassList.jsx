import css from '../ClassList/ClassList.module.css';
import Class from '../Class/Class';

export default function ClassList() {
  return (
    <ul className={css.classList}>
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
