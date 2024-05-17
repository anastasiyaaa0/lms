import css from '../Class/Class.module.css';
import { LuDelete } from 'react-icons/lu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

export default function Class() {
  const [openClassOptionsModal, setOpenClassOptionsModal] = useState(false);

  const toggleModal = () => {
    setOpenClassOptionsModal(!openClassOptionsModal);
  };

  return (
    <Link to=":classId" className={css.link}>
      <div className={css.classCard}>
        <div className={css.topInfo}>
          <div className={css.btnWrapper}>
            <button onClick={toggleModal} className={css.quickActionsBtn}>
              <LuDelete className={css.quickActionsIcon} />
            </button>
            {openClassOptionsModal && (
              <DeleteConfirmationModal
                modalOpen={openClassOptionsModal}
                handleClose={toggleModal}
              />
            )}
          </div>
          <h3 className={css.classTitle}>ПЕРЕДДИПЛОМНЕ ПРОЕКТУВАННЯ</h3>
          <p className={css.classDescription}>
            Опис класу опис класу опис класуопис класу опис класу
          </p>
          <p className={css.classTutor}>DESCRIPTION</p>
        </div>
        <div className={css.tutor}>A</div>
      </div>
    </Link>
  );
}
