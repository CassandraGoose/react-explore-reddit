import Post from './Post.js';
import useSubredditByTime from './useSubredditByTime.js';

function Posts() {
  const { loading, error, posts } = useSubredditByTime('2meirl4meirl', 'all');

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>Something went wrong...</p>}
    {(!error && !loading) && <section class="posts">
      {posts.map((post) => (<Post key={post.data.id} post={post.data} />))}
    </section>}
    </>
  );
}

export default Posts;
