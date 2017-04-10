import React from 'react';

const Result = ({ result }) => {
  return (
    <div className='result'>
      <h4>Result</h4>
      <pre><code>{result}</code></pre>
    </div>
  );
}

export default Result;
