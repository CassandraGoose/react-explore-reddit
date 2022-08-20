import { useLocation } from "react-router-dom";
import useFetch from './useFetch.js';

function PostDetails() {
  const permalink = useLocation().state.permalink;
  const link = `https://www.reddit.com${permalink}`;
  const { loading, error, data } = useFetch(`${link}.json`);
  let post;
  let date;

  if (data) {
    post = data[0].data.children[0].data;
    date = new Date(post.created * 1000);
  }

  function renderMedia(post) {
    return post.media ? <p>This post has a video, you'll have to check it out on <a href={link}>Reddit</a></p> : <img src={post.url} alt="idk"/>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data) return (
    <article className="gutters flex spaced">
      <div>
        <p className="post-title">{post.title}</p>
        {post.over_18 && <p class="nsfw">this post is nsfw</p>}
        <div>
          {post.all_awardings.map((award) => <img key={award.id} className="detailed-post-award-image" src={award.icon_url} alt={award.description} />)}
        </div>
        <p className="post-author">{post.author}</p>
        <p>{date.toLocaleString("en-US")}</p>
      </div>
      <div>
        {renderMedia(post)}
      </div>
    </article>
  );
}

export default PostDetails;