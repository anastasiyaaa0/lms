import css from './Header.module.css';
import { IoAdd } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import AddClassMenu from '../AddClassMenu/AddClassMenu';
import LogOutMenu from '../LogoutMenu/LogoutMenu';

import { useState } from 'react';

export default function Header({ handleShowSideBar }) {
  const [openAddClassMenu, setOpenAddClassMenu] = useState(false);
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);

  const toggleAddClassMenu = () => {
    setOpenAddClassMenu(!openAddClassMenu);
  };

  const toggleLogoutMenu = () => {
    setOpenLogoutMenu(!openLogoutMenu);
  };

  return (
    <div className={css.header}>
      <div className={css.headerLeftArea}>
        <button
          type="button"
          onClick={handleShowSideBar}
          className={css.headerBtn}
        >
          <RxHamburgerMenu className={css.hamburgerMenuIcon} />
        </button>
        <p className={css.headerLogo}>EduHub📚</p>
      </div>
      <div className={css.headerRightArea}>
        <div className={css.headerAddClassBtn}>
          <button
            type="button"
            onClick={toggleAddClassMenu}
            className={css.headerBtn}
          >
            <IoAdd className={css.addClassIcon} />
          </button>
          {openAddClassMenu && (
            <AddClassMenu
              isOpen={openAddClassMenu}
              onClose={toggleAddClassMenu}
            />
          )}
        </div>
        <div className={css.logoutArea}>
          <div onClick={toggleLogoutMenu} className={css.userProfile}></div>
          {openLogoutMenu && (
            <LogOutMenu isOpen={openLogoutMenu} onClose={toggleLogoutMenu} />
          )}
        </div>
      </div>
    </div>
  );
}
