import Post from './Post.js';
import useFetch from './useFetch.js';

function Posts() {
  const name = '2meirl4meirl'; // see stretch features for reasoning behind this
  const time = 'all'; // see stretch features for reasoning behind this
  const link = `https://www.reddit.com/r/${name}.json?t=${time}`;
  const { loading, error, data } = useFetch(link);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data) return <section className="gutters flex column">
    {data.data.children.map((post) => (<Post key={post.data.id} post={post.data} />))}
  </section>
}

export default Posts;
