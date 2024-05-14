import css from '../AddClassModal/AddClassModal.module.css';
import { useEffect, useRef } from 'react';

export default function AddClassModal({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen, onClose, modalRef]);

  return (
    <div className={css.addClassModal} ref={modalRef}>
      <ul className={css.optionsList}>
        <li className={css.optionsListItem}>Приєднатися до курсу</li>
        <li className={css.optionsListItem}>Створити курс</li>
      </ul>
    </div>
  );
}

{
  /* <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <ul>
            <li>Приєднатися до курсу</li>
            <li>Створити курс</li>
          </ul>
        </Box>
      </Modal> */
}
