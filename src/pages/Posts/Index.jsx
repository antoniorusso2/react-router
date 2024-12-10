import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

export const URI = 'http://localhost:3000/';

export default function PostsMain() {
  const [posts, setPosts] = useState([]);

  function fetchData() {
    axios
      .get(URI + 'posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchData, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {posts.map((post) => {
              return (
                <div key={post.id} className="col-6">
                  <Card post={post} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
