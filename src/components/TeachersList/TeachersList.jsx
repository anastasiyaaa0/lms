import css from './TeachersList.module.css';
import PeopleList from '../PeopleList/PeopleList';

export default function TeachersList() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.teachersHeader}>Викладачі</h2>
        <PeopleList />
      </div>
    </>
  );
}
