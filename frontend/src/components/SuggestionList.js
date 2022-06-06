import React from 'react';
import { Card } from "antd";
import "./SuggestionList.scss";
import Suggestion from './Suggestion';

function SuggestionList({ style }) {
  return (
    <div style={style}>
      <Card title="Suggestions" size='small'>
        <p>
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </p>
      </Card>
    </div>
  );
}

export default SuggestionList;