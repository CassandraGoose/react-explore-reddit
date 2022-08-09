import { useState, useEffect } from 'react';
import Post from './Post.js';

// what if i wanted to make this function reusable for other get requests?
// it then can't live in the useEffect like people suggest
// the exaplanation in the following stack overflow is confusing. do we have to do this useCallback stuff to do what i'm trying to do? 
// see : https://devtrium.com/posts/async-functions-useeffect, https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
// (i e, i can't extract the data i want here, so i can't call the setFN)
// if i call the setFn in useEffect, it won't work b/c of async...
// also handling errors is weird. how do i do that?
async function getPosts(subreddit, setFn) {
  let subredditPostsJson;
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?t=all`);
    subredditPostsJson = await response.json();
    console.log('well', subredditPostsJson.data.children)
  } catch(e) {
    console.log('something went wrong', e);
  } finally {
    setFn(subredditPostsJson.data.children);
  }
}

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts('2meirl4meirl', setPosts);
  }, []);

  return (
    <div class="posts">
      {posts.map((post) => (<Post key={post.data.id} post={post.data} />))}
    </div>
  );
}

export default Posts;
