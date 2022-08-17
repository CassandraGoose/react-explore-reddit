function renderMedia() {
  return <p>has video</p>
}

function renderThumbnail(thumbnail, height, width) {
  return <img src={thumbnail} alt='idk' height={height} width={width}/>
}

function Post({ post }) {
  const date = new Date(post.created * 1000);
  return (
    <article class="post">
      <div>
        <p class="post-title">{post.title}</p>
        <p class="post-author">{post.author}</p>
        <p>{date.toLocaleString("en-US")}</p>
      </div>
      <div>
        {post.over_18 && <p>this post is nsfw</p>}
        {(post.thumbnail !== 'self') && renderThumbnail(post.thumbnail, post.thumbnail_height, post.thumbnail_width)}
        {!!post.media && renderMedia(post.media)}
      </div>
    </article>
  );
}

export default Post;