import React from 'react';
import "./StoryList.scss";
import { Card } from "antd";

function StoryList({ style }) {
  return (
    <div style={style}>
      <Card title="Stories" size='small'>
        <p>Stories from peope you follow will show up here</p>
      </Card>
    </div>
  );
}

export default StoryList;