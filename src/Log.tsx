import React from "react";

const Log: React.FC = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

export default Log;
