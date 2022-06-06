import React from "react";
import { Input, Menu } from "antd";
import "./AppLayout.scss";
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";
// import LogoImage from "assets/logo.png";

function AppLayout({ children, sidebar }) {
  return (
    <div className="app">
      <div className="header">
        <h1 className="page-title">
          {/* <img src={LogoImage} alt="logo" /> */}
          게하
        </h1>
        <div className="search">
          <Input.Search />
        </div>
        <div className="topnav">
          <Menu >
            <Menu.Item>메뉴1</Menu.Item>
            <Menu.Item>메뉴2</Menu.Item>
            <Menu.Item>메뉴3</Menu.Item>
          </Menu>
        </div>
      </div>
      <div className="contents">{children}</div>
      <div className="sidebar">
        <StoryList style={{ marginBottom: "1rem" }} />
        <SuggestionList />
      </div>
      <div className="footer">&copy; 2022. GuestHi Corporation</div>
    </div>
  );
}

export default AppLayout;