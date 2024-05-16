import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsSidebarOpen } from '../../redux/sidebar/selectors';
import { toggleSidebar } from '../../redux/sidebar/slice';

export default function HeaderSideBar({ showAddClassBtn = true, children }) {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(selectIsSidebarOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <Header
        handleShowSideBar={handleToggleSidebar}
        showAddClassBtn={showAddClassBtn}
      >
        {children}
      </Header>
      {isOpenSideBar && <SideBar />}
    </>
  );
}
