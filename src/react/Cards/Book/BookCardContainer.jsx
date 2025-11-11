import React from 'react';

const BookCardContainer = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '2rem',
    padding: '2rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default BookCardContainer;
