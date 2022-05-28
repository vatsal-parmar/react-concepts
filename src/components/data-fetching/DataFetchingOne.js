import React, { useState, useEffect } from 'react';

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setPost({});
        setLoading(false);
      });
  }, []);

  return (
    <div>
      DataFetchingOne
      {loading ? <p> loading... </p> : <div>{post.title}</div>}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default DataFetchingOne;
