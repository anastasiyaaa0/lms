import css from './PeopleList.module.css';
import { MdMailOutline } from 'react-icons/md';

export default function PeopleList() {
  return (
    <ul className={css.peopleList}>
      <li className={css.peopleListItem}>
        <div className={css.personInfo}>
          <div className={css.personPin}>A</div>
          <p className={css.personName}>Андрій Іванович Гізун</p>
        </div>
        <a href="mailto:somebody@gmail.com" className={css.mailLink}>
          <MdMailOutline className={css.mailIcon} />
        </a>
      </li>
      <li className={css.peopleListItem}>
        <div className={css.personInfo}>
          <div className={css.personPin}>A</div>
          <p className={css.personName}>Андрій Іванович Гізун</p>
        </div>
        <a href="mailto:somebody@gmail.com" className={css.mailLink}>
          <MdMailOutline className={css.mailIcon} />
        </a>
      </li>
      <li className={css.peopleListItem}>
        <div className={css.personInfo}>
          <div className={css.personPin}>A</div>
          <p className={css.personName}>Андрій Іванович Гізун</p>
        </div>
        <a href="mailto:somebody@gmail.com" className={css.mailLink}>
          <MdMailOutline className={css.mailIcon} />
        </a>
      </li>
    </ul>
  );
}
