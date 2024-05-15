import css from './LogoutMenu.module.css';
import { useState } from 'react';
import LogoutConfirmationModal from '../LogoutConfirmationModal/LogoutConfirmationModal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

export default function LogoutMenu({ isOpen, onClose }) {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const toggleLogoutModal = () => {
    if (openLogoutModal) onClose();
    setOpenLogoutModal(!openLogoutModal);
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
          <div onClick={toggleLogoutModal} className={css.logoutMenu}>
            Вихід
          </div>
        </Box>
      </Modal>

      {openLogoutModal && (
        <LogoutConfirmationModal
          modalOpen={openLogoutModal}
          handleClose={toggleLogoutModal}
        />
      )}
    </>
  );
}
