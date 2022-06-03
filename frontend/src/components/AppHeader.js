import React from 'react';
import "./AppHeader.scss";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


function AppHeader() {
  return (
    <div className='AppHeader'>
      <h1>게하</h1>
      <Input.Search placeholder="검색하세요" />
      <div className='topnav'>
        Menu1
        Menu2
        Menu3
      </div>
    </div>
  );
}

export default AppHeader;