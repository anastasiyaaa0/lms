import css from './Header.module.css';
import { IoAdd } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import AddClassModal from '../AddClassModal/AddClassModal';

import { useState } from 'react';

export default function Header({ handleShowSideBar }) {
  const [openAddClassModal, setOpenAddClassModal] = useState(false);

  const toggleModal = () => {
    setOpenAddClassModal(!openAddClassModal);
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
          <button type="button" onClick={toggleModal} className={css.headerBtn}>
            <IoAdd className={css.addClassIcon} />
          </button>
          {openAddClassModal && (
            <AddClassModal isOpen={openAddClassModal} onClose={toggleModal} />
          )}
        </div>
        <div className={css.userProfile}></div>
      </div>
    </div>
  );
}
