import React from 'react';

const NotebookCardContainer = ({ children }) => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    listStyle: 'none',
    margin: '0',
    padding: '0',
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

export default NotebookCardContainer;
