import css from './TaskDetailsComponent.module.css';
import TaskSubmissionForm from '../TaskSubmissionForm/TaskSubmissionForm';

export default function TaskDetailsComponent() {
  return (
    <div className={css.container}>
      <div className={css.task}>
        <div className={css.taskInfo}>
          <h2 className={css.taskName}>
            Лабораторна робота 4. Організація патентного пошуку по заданій темі
            з використанням мережі Інтернет
          </h2>
          <p className={css.taskAuthorDate}>Андрій Іванович Гізун • 7 бер.</p>
          <div className={css.taskMarkDueDate}>
            <p className={css.mark}>
              <span className={css.highlighted}>13</span>/14
            </p>
            <p className={css.dueDate}>Дата здачі: 22 бер., 08:00</p>
          </div>
        </div>
        <div className={css.taskDescription}>
          <p className={css.description}>
            Мета роботи – отримання навичок використання спеціальних ресурсів
            для проведення первинного патентного пошуку. Ознайомлення з поняттям
            формула винаходу
          </p>
        </div>
      </div>
      <div className={css.assignmentInfo}>
        <TaskSubmissionForm />
      </div>
    </div>
  );
}
