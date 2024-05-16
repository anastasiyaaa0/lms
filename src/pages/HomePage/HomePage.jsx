import css from '../HomePage/HomePage.module.css';
import { NavLink } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section className={css.container}>
        <h2 className={css.homePageGreeting}>Classroom</h2>
        <NavLink to="/authorized" className={css.goStudyLink}>
          Study!
        </NavLink>
      </section>
    </>
  );
}
