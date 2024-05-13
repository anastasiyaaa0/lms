import css from '../ClassesPage/ClassesPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ClassList from '../../components/ClassList/ClassList';

export default function ClassesPage() {
  return (
    <>
      <DocumentTitle>My Classes</DocumentTitle>
      <section className={css.container}>
        <Header />
        <SideBar />
        <ClassList />
      </section>
    </>
  );
}
