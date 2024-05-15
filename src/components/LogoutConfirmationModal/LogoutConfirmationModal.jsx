import css from './LogoutConfirmationModal.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';

export default function LogoutConfirmationModal({ modalOpen, handleClose }) {
  return (
    <ModalWindow modalOpen={modalOpen} handleClose={handleClose}>
      <div className={css.modalWrapper}>
        <h3 className={css.modalHeader}>Вийти з облікового запису?</h3>
        <div className={css.buttonsSet}>
          <button type="button" onClick={handleClose} className={css.modalBtn}>
            Скасувати
          </button>
          <button
            type="button"
            // onClick={handleLogout}
            className={`${css.modalBtn} ${css.btnCancel}`}
          >
            Підтвердити вихід
          </button>
        </div>
      </div>
    </ModalWindow>
  );
}
