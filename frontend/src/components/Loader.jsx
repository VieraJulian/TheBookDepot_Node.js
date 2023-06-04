import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <ClipLoader loading={true} size={50} />
    </div>
  );
};

export default Loader;
