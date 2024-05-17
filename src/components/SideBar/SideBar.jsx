import css from '../SideBar/SideBar.module.css';
import { MdHomeFilled } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { MdArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import SidebarClassComponent from '../SidebarClassComponent/SidebarClassComponent';
import { useState } from 'react';

export default function SideBar() {
  const [isShownMyClasses, setShowMyClasses] = useState(true);
  const [isShownMyOwnClasses, setShowMyOwnClasses] = useState(true);

  const toggleShowMyClasses = () => {
    setShowMyClasses(!isShownMyClasses);
  };

  const toggleShowMyOwnClasses = () => {
    setShowMyOwnClasses(!isShownMyOwnClasses);
  };

  return (
    <div className={css.sidebar}>
      <ul className={css.sidebarNavList}>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <MdHomeFilled className={css.sidebarIcon} />
            <NavLink to="/authorized/classes" className={css.homeLink}>
              Головна
            </NavLink>
          </div>
        </li>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <MdArrowRight
              onClick={toggleShowMyOwnClasses}
              className={`${css.accordeonArrow} ${
                isShownMyOwnClasses && css.openIcon
              }`}
            />
            <MdOutlinePeopleAlt className={css.sidebarIcon} />
            <p>Курси, які я викладаю</p>
          </div>
          {isShownMyOwnClasses && (
            <ul className={css.sidebarCoursesList}>
              <li className={css.sidebarCoursesListItem}>
                <SidebarClassComponent />
              </li>
              <li className={css.sidebarCoursesListItem}>
                <SidebarClassComponent />
              </li>
              <li className={css.sidebarCoursesListItem}>
                <SidebarClassComponent />
              </li>
              <li className={css.sidebarCoursesListItem}>
                <SidebarClassComponent />
              </li>
              <li className={css.sidebarCoursesListItem}>
                <SidebarClassComponent />
              </li>
            </ul>
          )}
        </li>
        <li className={css.sidebarNavListItem}>
          <div className={css.sidebarCourseBillet}>
            <MdArrowRight
              onClick={toggleShowMyClasses}
              className={`${css.accordeonArrow} ${
                isShownMyClasses && css.openIcon
              }`}
            />
            <PiStudentFill className={css.sidebarIcon} />
            <p>Мої курси</p>
          </div>
          {isShownMyClasses && (
            <ul className={css.sidebarCoursesList}>
              <li>
                <SidebarClassComponent />
              </li>
              <li>
                <SidebarClassComponent />
              </li>
              <li>
                <SidebarClassComponent />
              </li>
              <li>
                <SidebarClassComponent />
              </li>
              <li>
                <SidebarClassComponent />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
