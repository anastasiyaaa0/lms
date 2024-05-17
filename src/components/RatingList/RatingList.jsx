import css from './RatingList.module.css';

export default function RatingList() {
  const isOnTime = false;
  return (
    <ul className={css.taskAssessmentList}>
      <li className={css.taskAssessmentListItem}>
        <div className={css.taskInfo}>
          <h3 className={css.taskName}>
            Лабораторна робота 4. Організація патентного пошуку Організація
            патентного пошуку Організація патентного пошуку
          </h3>
          <p className={css.taskDueDate}>Дата здачі: 22 бер., 08:00</p>
        </div>
        <div className={css.markInfo}>
          <p className={css.mark}>14/14</p>
          {!isOnTime && <p className={css.lateNotice}>Виконано невчасно</p>}
        </div>
      </li>
      <li className={css.taskAssessmentListItem}>
        <div className={css.taskInfo}>
          <h3 className={css.taskName}>
            Лабораторна робота 4. Організація патентного пошуку Організація
            патентного пошуку Організація патентного пошуку
          </h3>
          <p className={css.taskDueDate}>Дата здачі: 22 бер., 08:00</p>
        </div>
        <div className={css.markInfo}>
          <p className={css.mark}>14/14</p>
          {!isOnTime && <p className={css.lateNotice}>Виконано невчасно</p>}
        </div>
      </li>
      <li className={css.taskAssessmentListItem}>
        <div className={css.taskInfo}>
          <h3 className={css.taskName}>
            Лабораторна робота 4. Організація патентного пошуку Організація
            патентного пошуку Організація патентного пошуку
          </h3>
          <p className={css.taskDueDate}>Дата здачі: 22 бер., 08:00</p>
        </div>
        <div className={css.markInfo}>
          <p className={css.mark}>14/14</p>
          {!isOnTime && <p className={css.lateNotice}>Виконано невчасно</p>}
        </div>
      </li>
    </ul>
  );
}
