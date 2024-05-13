import css from './Header.module.css';
import { IoAdd } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.headerLeftArea}>
        <button
          type="button"
          // onClick={handleClick}
          className={css.headerBtn}
        >
          <RxHamburgerMenu className={css.hamburgerMenuIcon} />
        </button>
        <p className={css.headerLogo}>EduHub📚</p>
      </div>
      <div className={css.headerRightArea}>
        <button
          type="button"
          // onClick={handleClick}
          className={css.headerBtn}
        >
          <IoAdd className={css.addClassIcon} />
        </button>
        <div className={css.userProfile}></div>
      </div>
    </div>
  );
}
