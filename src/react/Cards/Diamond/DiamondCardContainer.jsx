/**
 * DiamondCardContainer Component
 * 
 * A flexbox container for displaying multiple DiamondCard components in a responsive grid.
 * Automatically wraps cards and maintains consistent spacing.
 */
const DiamondCardContainer = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default DiamondCardContainer;
