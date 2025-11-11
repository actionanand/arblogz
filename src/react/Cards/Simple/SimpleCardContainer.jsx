import React from 'react';

const SimpleCardContainer = ({ children }) => {
  const containerStyle = {
    display: 'grid',
    maxWidth: '1200px',
    marginInline: 'auto',
    paddingInline: '24px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    marginTop: '2rem',
    marginBottom: '2rem'
  };

  return (
    <section style={containerStyle}>
      {children}
    </section>
  );
};

export default SimpleCardContainer;
