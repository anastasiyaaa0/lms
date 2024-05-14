import css from '../SidebarClassComponent/SidebarClassComponent.module.css';

export default function SidebarClassComponent() {
  return (
    <>
      <div className={css.courseIcon}>A</div>
      <div className={css.courseInfo}>
        <h3 className={css.courseTitle}>Course1Couse1Course1</h3>
        <p className={css.courseDescr}>DescriptonDescriptonDescripton</p>
      </div>
    </>
  );
}
