import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

function AppLayout(props) {
  const { children } = props;
  return (
    <div>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}

export default AppLayout;