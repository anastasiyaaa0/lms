import css from '../AddClassModal/AddClassModal.module.css';
import { useEffect, useRef, useState } from 'react';
import CreateClassForm from '../CreateClassForm/CreateClassForm';
// import ModalWindow from '../ModalWindow/ModalWindow';

export default function AddClassModal({ isOpen, onClose }) {
  const [openCreateCourseForm, setCreateCourseForm] = useState(false);
  const modalRef = useRef();

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
    setCreateCourseForm(!openCreateCourseForm);
    if (openCreateCourseForm) {
      onClose();
    }
  };

  return (
    <>
      <div className={css.addClassModal} ref={modalRef}>
        <ul className={css.optionsList}>
          <li className={css.optionsListItem}>Приєднатися до курсу</li>
          <li onClick={toggleOpenForm} className={css.optionsListItem}>
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
    </>
  );
}
