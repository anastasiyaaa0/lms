import css from './Header.module.css';
import { IoAdd } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import AddClassMenu from '../AddClassMenu/AddClassMenu';
import LogOutMenu from '../LogoutMenu/LogoutMenu';

import { useState } from 'react';

export default function Header({
  handleShowSideBar,
  showAddClassBtn = true,
  children,
}) {
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
        <h2 className={css.headerLogo}>EduHub📚</h2>
        <h2 className={css.classTitle}>{children}</h2>
      </div>
      <div className={css.headerRightArea}>
        {showAddClassBtn && (
          <button
            type="button"
            onClick={toggleAddClassMenu}
            className={css.headerBtn}
          >
            <IoAdd className={css.addClassIcon} />
          </button>
        )}
        {openAddClassMenu && (
          <AddClassMenu
            isOpen={openAddClassMenu}
            onClose={toggleAddClassMenu}
          />
        )}
        <div className={css.logoutArea}>
          <div onClick={toggleLogoutMenu} className={css.userProfile}>
            A
          </div>
          {openLogoutMenu && (
            <LogOutMenu isOpen={openLogoutMenu} onClose={toggleLogoutMenu} />
          )}
        </div>
      </div>
    </div>
  );
}
