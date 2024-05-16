import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import TaskNav from '../../components/TaskNav/TaskNav';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import TaskList from '../../components/TaskList/TaskList';

export default function ClassPage() {
  return (
    <>
      <DocumentTitle>Class</DocumentTitle>
      <TaskNav />
      <TaskHeader />
      <TaskList />
    </>
  );
}
