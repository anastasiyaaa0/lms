import css from '../Layout/Layout.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';

export default function Layout({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.layout}>
      {!isLoggedIn && <AuthNav />}
      {children}
    </div>
  );
}
