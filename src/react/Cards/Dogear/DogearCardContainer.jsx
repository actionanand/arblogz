import React from 'react';

const DogearCardContainer = ({ children }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '45rem',
    margin: '0 auto',
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default DogearCardContainer;
