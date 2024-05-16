import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import HeaderSideBar from '../../components/HeaderSidebar/HeaderSidebar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import TaskNav from '../../components/TaskNav/TaskNav';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import TaskList from '../../components/TaskList/TaskList';

export default function ClassPage() {
  return (
    <>
      <DocumentTitle>Class</DocumentTitle>
      <HeaderSideBar showAddClassBtn={false}>
        Переддипломна практика Переддипломна практика Переддипломна
      </HeaderSideBar>
      <PageWrapper>
        <TaskNav />
        <TaskHeader />
        <TaskList />
      </PageWrapper>
    </>
  );
}
