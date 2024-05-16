import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import HeaderSideBar from '../../components/HeaderSidebar/HeaderSidebar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import ClassList from '../../components/ClassList/ClassList';

export default function ClassesPage() {
  return (
    <>
      <DocumentTitle>My Classes</DocumentTitle>
      <HeaderSideBar />
      <PageWrapper>
        <ClassList />
      </PageWrapper>
    </>
  );
}
