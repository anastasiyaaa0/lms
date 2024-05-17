import css from '../SidebarClassComponent/SidebarClassComponent.module.css';
import { Link } from 'react-router-dom';

export default function SidebarClassComponent() {
  return (
    <Link to="classes/:classId" className={css.link}>
      <div className={css.coursesListItem}>
        <div className={css.courseIcon}>A</div>
        <div className={css.courseInfo}>
          <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
          <p className={css.courseDescr}>DescriptonDescriptonDescripton</p>
        </div>
      </div>
    </Link>
  );
}
