import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const URI = 'http://localhost:3000/';

export default function PostsMain() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    axios
      .get(URI + 'posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchData, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row"></div>
        </div>
      </main>
    </>
  );
}
