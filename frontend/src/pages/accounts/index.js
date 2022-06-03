import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

function AccountsRoutes({ match }) {
  return (
    <div>
      accounts index.js
      <Routes>
        <Route path={match.url + "/profile"} element={<Profile />} />
        <Route path={match.url + "/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default AccountsRoutes;