import css from './StudentsList.module.css';
import PeopleList from '../PeopleList/PeopleList';

export default function StudentsList() {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.studentsHeader}>Студенти</h2>
        <PeopleList />
      </div>
    </>
  );
}
