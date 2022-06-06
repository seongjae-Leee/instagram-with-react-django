import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

function AccountsRoutes() {
  return (
    <div>
      accounts index.js
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default AccountsRoutes;