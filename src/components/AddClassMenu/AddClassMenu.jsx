import css from './AddClassMenu.module.css';
import { useEffect, useRef, useState } from 'react';
import CreateClassForm from '../CreateClassForm/CreateClassForm';
import JoinClassForm from '../JoinClassForm/JoinClassForm';
// import ModalWindow from '../ModalWindow/ModalWindow';

export default function AddClassMenu({ isOpen, onClose }) {
  const [openCreateCourseForm, setCreateCourseForm] = useState(false);
  const [openJoinCourseForm, setJoinCourseForm] = useState(false);
  // const modalRef = useRef();

  // useEffect(() => {
  //   const handleClickOutside = event => {
  //     if (
  //       !openCreateCourseForm &&
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target)
  //     ) {
  //       onClose();
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener('click', handleClickOutside, true);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, [isOpen, onClose, modalRef]);

  const toggleOpenCreateClassForm = () => {
    if (openCreateCourseForm) onClose();
    setCreateCourseForm(!openCreateCourseForm);
  };

  const toggleOpenJoinClassForm = () => {
    if (openJoinCourseForm) onClose();
    setJoinCourseForm(!openJoinCourseForm);
  };

  return (
    <>
      <div
        className={css.addClassMenu}
        //  ref={modalRef}
      >
        <ul className={css.optionsList}>
          <li onClick={toggleOpenJoinClassForm} className={css.optionsListItem}>
            Приєднатися до курсу
          </li>
          <li
            onClick={toggleOpenCreateClassForm}
            className={css.optionsListItem}
          >
            Створити курс
          </li>
        </ul>
      </div>

      {openCreateCourseForm && (
        <CreateClassForm
          modalOpen={openCreateCourseForm}
          handleClose={toggleOpenCreateClassForm}
        />
      )}

      {openJoinCourseForm && (
        <JoinClassForm
          modalOpen={openJoinCourseForm}
          handleClose={toggleOpenJoinClassForm}
        />
      )}
    </>
  );
}
