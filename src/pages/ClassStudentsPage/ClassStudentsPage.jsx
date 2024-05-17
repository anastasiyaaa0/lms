import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import TeachersList from '../../components/TeachersList/TeachersList';
import StudentsList from '../../components/StudentsList/StudentsList';

export default function ClassStudentsPage() {
  return (
    <>
      <DocumentTitle>Students</DocumentTitle>
      <TeachersList />
      <StudentsList />
    </>
  );
}
