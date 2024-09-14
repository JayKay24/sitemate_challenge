import React from 'react';

export function Issue({ issue }) {
  return (
    <div className='issue'>
      <pre>
        <code>
          {JSON.stringify(issue, null, 2)}
        </code>
      </pre>
    </div>
  );
}
