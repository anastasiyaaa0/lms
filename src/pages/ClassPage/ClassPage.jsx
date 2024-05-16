import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import TaskNav from '../../components/TaskNav/TaskNav';
import { Outlet } from 'react-router-dom';

export default function ClassPage() {
  return (
    <>
      <DocumentTitle>Class</DocumentTitle>
      <TaskNav />
      <Outlet />
    </>
  );
}
