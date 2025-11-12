import React from 'react';

const CircleCardContainer = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  return (
    <ul style={containerStyle}>
      {children}
    </ul>
  );
};

export default CircleCardContainer;
