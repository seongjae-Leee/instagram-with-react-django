import React from 'react';
import { Avatar, Card } from 'antd';
import { HeartOutlined, HeartFilled, UserOutlined } from '@ant-design/icons';

function Post({ post }) {
  const { caption, location, photo, } = post;
  return (
    <div >
      <Card hoverable
        cover={
          <img src={photo} alt={caption} />
        }
        actions={
          [<HeartFilled />]
        }
      >
        <Card.Meta avatar={<Avatar size="large" icon={<UserOutlined />} />} title={location} description={caption} />
      </Card>
      {/* {caption},{location},{photo}
      <img src={photo} alt={caption} style={{ width: "100px" }} /> */}
    </div>
  );
}

export default Post;