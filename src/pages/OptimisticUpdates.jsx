import { startTransition, useEffect, useOptimistic, useState, useTransition } from 'react';
import { fetchFrom, deletePost } from '../utils';

const OptimisticUpdates = () => {
  const [posts, setPosts] = useState([]);

  const [optimisticPosts, addOptimisticDelete] = useOptimistic(
    posts,
    (currentPosts, deletedId) => {
      return currentPosts.filter((post) => post.id !== deletedId);
    }
  );

  useEffect(() => {
    fetchFrom('posts', (data) => setPosts(data.slice(0, 3)));
  }, []);

  const handleDeletePost = async (id) => {

    startTransition(async () => {
      try {
        addOptimisticDelete(id);

        await deletePost(id);

        setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
        console.log('Delete done!');
      } catch (error) {
        console.error('Delete failed, reverting...', error);
      }
    });
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Optimistic Updates</h2>

      <h3>Posts</h3>
      {optimisticPosts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        optimisticPosts.map((post) => (
          <div className="post" key={post.id}>
            <h4 className="text-capitalize">{post.title}</h4>
            <p>{post.body}</p>
            <button
              className="btn btn--danger"
              onClick={() => handleDeletePost(post.id)}
            >
              Delete Post
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OptimisticUpdates;