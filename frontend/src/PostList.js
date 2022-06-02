import React, { useEffect, useState } from 'react';
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/posts/";

function PostList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log("loaded response : ", response);
        setPostList(data);
      })
      .catch(error => {
        // error.response;
      });
    console.log("mounted");
  }, []);


  return (
    <div>
      <h1>PostList</h1>
      {postList.map(post => {
        const { id, caption, location, photo, } = post;
        return (
          <div key={id}>
            {caption},{location},{photo}
            <img src={photo} alt={caption} style={{ width: "100px" }} />
          </div>
        );
      }
      )}
    </div>
  );
}

export default PostList;