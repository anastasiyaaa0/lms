import css from './ClassPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import HeaderSideBar from '../../components/HeaderSidebar/HeaderSidebar';

export default function ClassPage() {
  return (
    <>
      <DocumentTitle>Class</DocumentTitle>
      <div className={css.container}>
        <HeaderSideBar showAddClassBtn={false}>
          Переддипломна практика Переддипломна практика Переддипломна
        </HeaderSideBar>
      </div>
    </>
  );
}
