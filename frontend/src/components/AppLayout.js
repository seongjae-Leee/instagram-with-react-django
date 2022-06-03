import React from 'react';
import "./AppLayout.scss";
import { Input, Menu } from 'antd';

function AppLayout(props) {
  const { children } = props;
  return (
    <div className='app'>
      <div className='header'>
        <h1 className='page-title'>게하</h1>
        <div className='search'><Input.Search placeholder="검색하세요" /></div>
        <div className='topnav'>
          <Menu mode='horizontal'>
            <Menu.Item>메뉴1</Menu.Item>
            <Menu.Item>메뉴2</Menu.Item>
            <Menu.Item>메뉴3</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className='sidebar'>Sidebar</div>
      <div className='contents'>{children}</div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default AppLayout;