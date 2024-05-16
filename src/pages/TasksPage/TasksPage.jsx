import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import TaskList from '../../components/TaskList/TaskList';

export default function TasksPage() {
  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <TaskHeader />
      <TaskList />
    </>
  );
}
