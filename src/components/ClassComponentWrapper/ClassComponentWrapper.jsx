import css from './ClassComponentWrapper.module.css';

export default function ClassComponentWrapper({ children }) {
  return <div className={css.container}>{children}</div>;
}
