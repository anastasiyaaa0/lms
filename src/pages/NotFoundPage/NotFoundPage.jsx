import css from './NotFoundPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

export default function NotFoundPage() {
  return (
    <>
      <DocumentTitle>Not found</DocumentTitle>
      <p className={css.text}>Not found page :\</p>
    </>
  );
}
