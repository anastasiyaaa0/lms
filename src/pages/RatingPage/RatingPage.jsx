import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import UserInfoHeader from '../../components/UserInfoHeader/UserInfoHeader';
import RatingList from '../../components/RatingList/RatingList';

export default function RatingPage() {
  return (
    <>
      <DocumentTitle>Rating</DocumentTitle>
      <UserInfoHeader />
      <RatingList />
    </>
  );
}
