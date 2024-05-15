import css from './AddClassMenu.module.css';
import { useState } from 'react';
import CreateClassForm from '../CreateClassForm/CreateClassForm';
import JoinClassForm from '../JoinClassForm/JoinClassForm';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

export default function AddClassMenu({ isOpen, onClose }) {
  const [openCreateCourseForm, setCreateCourseForm] = useState(false);
  const [openJoinCourseForm, setJoinCourseForm] = useState(false);

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
      <Modal
        open={isOpen}
        onClose={onClose}
        BackdropComponent={Backdrop}
        BackdropProps={{ sx: { backgroundColor: 'transparent' } }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.addClassMenu}>
          <ul className={css.optionsList}>
            <li
              onClick={toggleOpenJoinClassForm}
              className={css.optionsListItem}
            >
              Приєднатися до курсу
            </li>
            <li
              onClick={toggleOpenCreateClassForm}
              className={css.optionsListItem}
            >
              Створити курс
            </li>
          </ul>
        </Box>
      </Modal>

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
