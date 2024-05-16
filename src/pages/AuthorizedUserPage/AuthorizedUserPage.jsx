import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsSidebarOpen } from '../../redux/sidebar/selectors';
import { toggleSidebar } from '../../redux/sidebar/slice';

export default function AuthorizedUserPage() {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(selectIsSidebarOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      <Header handleShowSideBar={handleToggleSidebar}></Header>
      {isOpenSideBar && <SideBar />}
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </>
  );
}
