import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TopAnnouncement from '../common/TopAnnouncement';

export default function MainLayout() {
  return (
    <>
      <TopAnnouncement />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
