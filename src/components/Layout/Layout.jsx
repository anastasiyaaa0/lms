import css from '../Layout/Layout.module.css';

export default function Layout({ children }) {
  return <div className={css.layout}>{children}</div>;
}
