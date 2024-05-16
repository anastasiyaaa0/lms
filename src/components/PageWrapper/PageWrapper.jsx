import css from './PageWrapper.module.css';

import { useSelector } from 'react-redux';
import { selectIsSidebarOpen } from '../../redux/sidebar/selectors';

export default function PageWrapper({ children }) {
  const isOpenSideBar = useSelector(selectIsSidebarOpen);
  return (
    <section
      className={`${css.container} ${!isOpenSideBar && css.containerExpanded}`}
    >
      {children}
    </section>
  );
}
