import { Suspense } from 'react';
import { ContactBar } from './ContactBar/ContactBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <ContactBar />
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
