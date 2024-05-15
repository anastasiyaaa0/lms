import css from './LogoutMenu.module.css';
import { useState } from 'react';
import LogoutConfirmationModal from '../LogoutConfirmationModal/LogoutConfirmationModal';

export default function LogoutMenu({ isOpen, onClose }) {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const toggleLogoutModal = () => {
    if (openLogoutModal) onClose();
    setOpenLogoutModal(!openLogoutModal);
  };

  return (
    <>
      <div onClick={toggleLogoutModal} className={css.logoutMenu}>
        Вихід
      </div>
      {openLogoutModal && (
        <LogoutConfirmationModal
          modalOpen={openLogoutModal}
          handleClose={toggleLogoutModal}
        />
      )}
    </>
  );
}
