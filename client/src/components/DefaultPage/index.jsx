import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function DefaultPage() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
