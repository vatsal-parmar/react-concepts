import React, { useReducer, useEffect } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  return (
    <div>
      DataFetchingTwo
      {state.loading ? <p> loading... </p> : <div>{state.post.title}</div>}
      {state.error ? <p>{state.error}</p> : null}
    </div>
  );
};

export default DataFetchingTwo;
