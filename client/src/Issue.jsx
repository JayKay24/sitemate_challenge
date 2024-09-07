import React from 'react';

export function Issue({ issue }) {
  return (
    <pre>
      <code>
        {JSON.stringify(issue, null, 2)}
      </code>
    </pre>
  );
}
