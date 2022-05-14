import React, { useState, useEffect } from 'react';

export const DocOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count - {count}
      </button>
    </div>
  );
};
