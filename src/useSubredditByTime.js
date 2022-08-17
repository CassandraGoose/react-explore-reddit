import { useState, useEffect } from 'react';

// non-generic fetch hook b/c there is no foreseeable future where this app
// needs to be calling anything besides a subreddit endpoint 
// and I like having everything that has to do with getting the data
// living together ¯\_(ツ)_/¯

function useSubredditByTime(subredditName, time) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [subRedditPosts, setSubRedditPosts] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let subRedditData;
      try {
        const response = await fetch(`https://www.reddit.com/r/${subredditName}.json?t=${time}`);
        subRedditData = await response.json();
      } catch(e) {
        setError(e);
      }
      setSubRedditPosts(subRedditData.data.children);
      setLoading(false);
    })();
  }, [subredditName, time]);

  return {
    loading,
    error,
    posts: subRedditPosts,
  };
}

export default useSubredditByTime;
