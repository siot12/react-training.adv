import {useEffect, useState } from 'react';
import { fetchFrom, hasPermission, permissions } from '../utils';
import { usePermission } from '../components/custom-hooks/usePermission.js';

const Hooks = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);

  const mayViewUsers = usePermission('');
  const mayViewAlbums = usePermission('');


  useEffect(() => {
    if(mayViewUsers){
      fetchFrom('users', setUsers);
    }
    if(mayViewAlbums){
      fetchFrom('albums', setAlbums);
    }
    fetchFrom('posts', setPosts);
  }, [mayViewUsers,mayViewAlbums]);

  return (
    <div className="content-section">
      <h2 className="section-title">Hooks</h2>

      {mayViewUsers && (
        <>
          <h2>Users</h2>
          <ul>
            {users?.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        </>
      )}

      {mayViewAlbums && (
        <>
          <h2>Albums</h2>
          <ul>
            {albums?.map((album) => {
              return <li key={album.id}>{album.title}</li>;
            })}
          </ul>
        </>
      )}

      <h2>Posts</h2>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hooks;