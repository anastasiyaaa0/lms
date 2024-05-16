import css from '../ClassesPage/ClassesPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import HeaderSideBar from '../../components/HeaderSidebar/HeaderSidebar';
import ClassList from '../../components/ClassList/ClassList';

export default function ClassesPage() {
  return (
    <>
      <DocumentTitle>My Classes</DocumentTitle>
      <section className={css.container}>
        <HeaderSideBar />
        <ClassList />
      </section>
    </>
  );
}
