/**
 * SignCardContainer Component
 * 
 * A container for displaying multiple SignCard components.
 * Provides proper spacing and layout for sign cards.
 */
const SignCardContainer = ({ children }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
    padding: '20px 0',
    listStyle: 'none',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default SignCardContainer;
