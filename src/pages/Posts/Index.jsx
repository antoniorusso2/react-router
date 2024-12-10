import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const URI = 'http://localhost:3000/';

export default function PostsMain() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    axios
      .get(URI)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  useEffect(fetchData, []);

  const params = useParams();
  console.log(params);

  return (
    <>
      <main>
        <div>post list</div>
      </main>
    </>
  );
}
