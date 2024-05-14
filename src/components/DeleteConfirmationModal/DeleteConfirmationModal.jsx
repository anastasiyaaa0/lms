import css from '../DeleteConfirmationModal/DeleteConfirmationModal.module.css';
import ModalWindow from '../ModalWindow/ModalWindow';

export default function DeleteConfirmationModal({ modalOpen, handleClose }) {
  return (
    <ModalWindow modalOpen={modalOpen} handleClose={handleClose}>
      <div className={css.modalWrapper}>
        <h3 className={css.modalHeader}>Скасувати курс АтаППЗ 220 КР?</h3>
        <p className={css.modalMessage}>Вас буде вилучено з цього курсу.</p>
        <div className={css.buttonsSet}>
          <button
            type="button"
            onClick={() => handleClose()}
            className={css.modalBtn}
          >
            Скасувати
          </button>
          <button
            type="button"
            // onClick={handleСancel}
            className={`${css.modalBtn} ${css.btnCancel}`}
          >
            Скасувати реєстрацію
          </button>
        </div>
      </div>
    </ModalWindow>
  );
}
