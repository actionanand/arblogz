import React from 'react';

const FancyCardContainer = ({ children }) => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardsStyle = {
    display: 'grid',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  };

  return (
    <div style={containerStyle}>
      <ul style={cardsStyle}>
        {children}
      </ul>
    </div>
  );
};

export default FancyCardContainer;
