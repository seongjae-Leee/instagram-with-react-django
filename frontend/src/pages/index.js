import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import About from './About';
import AccountsRoutes from './accounts';
import Home from './Home';

function Root() {
  return (
    <div>
      <AppLayout>
        최상위 컴포넌트(children)
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/accounts' element={<AccountsRoutes />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default Root;