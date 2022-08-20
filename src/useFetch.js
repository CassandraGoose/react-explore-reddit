import { useState, useEffect } from 'react';

function useFetch(link) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      let resData;
      try {
        const response = await fetch(link);
        if (response.ok) {
          resData = await response.json();
          setData(resData);
        } else {
          setError('response not ok');
        }
      } catch(e) {
        setError(e.message);
        setData(null);
      }
      setLoading(false);
    })();
  }, [link]);

  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
