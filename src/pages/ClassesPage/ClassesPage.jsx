import css from '../ClassesPage/ClassesPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import ClassList from '../../components/ClassList/ClassList';
import { useState } from 'react';

export default function ClassesPage() {
  const [openSideBar, setOpenSideBar] = useState(true);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <DocumentTitle>My Classes</DocumentTitle>
      <section className={css.container}>
        <Header handleShowSideBar={toggleSideBar} />
        {openSideBar && <SideBar />}
        <ClassList openSideBar={openSideBar} />
      </section>
    </>
  );
}
