import css from './Task.module.css';
import { FaTasks } from 'react-icons/fa';

export default function Task() {
  return (
    <div className={css.task}>
      <div className={css.taskPin}>
        <FaTasks className={css.taskIcon} />
      </div>
      <div className={css.taskInfo}>
        <p className={css.taskMessage}>
          Андрій Іванович Гізун публікує нове завдання: Лабораторна робота 3.
          Вивчення методик аналізу програмного
        </p>
        <p className={css.taskDate}>25 березня</p>
      </div>
    </div>
  );
}
