import css from './TaskList.module.css';
import Task from '../Task/Task';

export default function TaskList() {
  return (
    <ul className={css.taskList}>
      <li className={css.taskListItem}>
        <Task />
      </li>
      <li className={css.taskListItem}>
        <Task />
      </li>
      <li className={css.taskListItem}>
        <Task />
      </li>
      <li className={css.taskListItem}>
        <Task />
      </li>
    </ul>
  );
}
