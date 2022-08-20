import { Link } from "react-router-dom";

function renderThumbnail(thumbnail, height, width) {
  return <img src={thumbnail} alt='idk' height={height} width={width}/>
}

function Post({ post }) {
  const date = new Date(post.created * 1000);

  return (
    <Link to={post.name} state={{permalink: post.permalink}}>
      <article className="post flex spaced">
        <div>
          <p className="post-title">{post.title}</p>
          <p className="post-author">{post.author}</p>
          <p>{date.toLocaleString("en-US")}</p>
        </div>
        <div>
          {post.over_18 && <p>this post is nsfw</p>}
          {(post.thumbnail !== 'self') && renderThumbnail(post.thumbnail, post.thumbnail_height, post.thumbnail_width)}
        </div>
      </article>
    </Link>
  );
}

export default Post;