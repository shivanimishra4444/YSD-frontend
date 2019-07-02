import React from 'react';
import { LoaderText } from '../const';

const Loader = () => {
  return (
    <div>
      <div className="loader-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />;
      </div>
      <div className="loader-content">{LoaderText}</div>
    </div>
  );
};

export default Loader;
