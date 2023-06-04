import React from 'react';

const Spinner = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <img src="../../public/img/loading.gif" alt="Loading..."/>
    </div>
  );
};

export default Spinner;
