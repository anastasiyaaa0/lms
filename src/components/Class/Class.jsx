import css from '../Class/Class.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Class() {
  return (
    <div className={css.classCard}>
      <div className={css.topInfo}>
        <button className={css.quickActionsBtn}>
          <BsThreeDotsVertical className={css.quickActionsIcon} />
        </button>
        <h3 className={css.classTitle}>ПЕРЕДДИПЛОМНЕ ПРОЕКТУВАННЯ</h3>
        <p className={css.classDescription}>
          Опис класу опис класу опис класуопис класу опис класу
        </p>
        <p className={css.classTutor}>DESCRIPTION</p>
      </div>
      <div className={css.tutor}>A</div>
    </div>
  );
}
