function renderMedia(media) {
  return <p>has video</p>
}

function renderThumbnail(thumbnail, height, width) {
  return <img src={thumbnail} alt='idk' height={height} width={width}/>
}

function Post({ post }) {
  const date = new Date(post.created * 1000);
  return (
    <div class="post">
      <div>
        <p>{post.title}</p>
        <p>{post.selftext}</p>
        <p>{JSON.stringify(date)}</p>
        <p>{post.author}</p>
      </div>
      <div>
        {post.over_18 && <p>this post is nsfw</p>}
        {(post.thumbnail !== 'self') && renderThumbnail(post.thumbnail, post.thumbnail_height, post.thumbnail_width)}
        {!!post.media && renderMedia(post.media)}
      </div>
    </div>
  );
}

export default Post;