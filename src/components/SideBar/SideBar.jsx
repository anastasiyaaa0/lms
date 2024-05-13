import css from '../SideBar/SideBar.module.css';
import { MdHomeFilled } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className={css.sidebar}>
      <ul className={css.sidebarNavList}>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <MdHomeFilled className={css.sidebarIcon} />
            <NavLink to="/classes" className={css.homeLink}>
              Головна
            </NavLink>
          </div>
        </li>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <MdOutlinePeopleAlt className={css.sidebarIcon} />
            <p>Курси, які я викладаю</p>
          </div>
          <ul className={css.sidebarCoursesList}>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
          </ul>
        </li>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <PiStudentFill className={css.sidebarIcon} />
            <p>Мої курси</p>
          </div>
          <ul className={css.sidebarCoursesList}>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
            <li className={css.sidebarCoursesListItem}>
              <div className={css.courseIcon}>A</div>
              <div className={css.courseInfo}>
                <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
                <p className={css.courseDescr}>
                  DescriptonDescriptonDescripton
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
