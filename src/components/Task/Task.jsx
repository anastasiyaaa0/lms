import css from './Task.module.css';
import { GrTasks } from 'react-icons/gr';

export default function Task() {
  return (
    <div className={css.task}>
      <GrTasks className={css.taskIcon} />
      <div className={css.taskInfo}>
        <p className={css.taskMessage}></p>
        <p className={css.taskDate}></p>
      </div>
    </div>
  );
}
