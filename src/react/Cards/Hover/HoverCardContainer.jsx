import React from 'react';

const HoverCardContainer = ({ children }) => {
  const childCount = React.Children.count(children);
  
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  };

  const cardsStyle = {
    display: 'grid',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    gridTemplateColumns: childCount === 1 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    justifyItems: childCount === 1 ? 'center' : 'center'
  };

  return (
    <div style={containerStyle}>
      <ul style={cardsStyle}>
        {children}
      </ul>
    </div>
  );
};

export default HoverCardContainer;
