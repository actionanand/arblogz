import { SignCard, SignCardContainer } from './index';

/**
 * Example usage of Sign Cards
 */

function SignCardExamples() {
  return (
    <div>
      <h2>Predefined Sign Types</h2>
      
      <h3>Warning</h3>
      <SignCard type="warning" />

      <h3>To Be Continued</h3>
      <SignCard type="continued" />

      <h3>Note</h3>
      <SignCard type="note" />

      <h3>Alert</h3>
      <SignCard type="alert" />

      <h3>Info</h3>
      <SignCard type="info" />

      <h3>Important</h3>
      <SignCard type="important" />

      <h3>Tip</h3>
      <SignCard type="tip" />

      <h3>Update</h3>
      <SignCard type="update" />

      <h2>Custom Signs</h2>
      
      <h3>Custom with Default Yellow</h3>
      <SignCard 
        type="custom"
        firstWord="Cut"
        secondWord="out"
      />

      <h3>Custom with Blue Theme</h3>
      <SignCard 
        type="custom"
        firstWord="New"
        secondWord="Feature"
        bgColor="#3498db"
        textColor="#fff"
        enclosedBg="#fff"
        enclosedColor="#3498db"
      />

      <h3>Custom with Green Theme</h3>
      <SignCard 
        type="custom"
        firstWord="Go"
        secondWord="Green"
        bgColor="#27ae60"
        textColor="#fff"
        enclosedBg="#fff"
        enclosedColor="#27ae60"
      />

      <h2>Multiple Signs in Container</h2>
      <SignCardContainer>
        <SignCard type="warning" />
        <SignCard type="important" />
        <SignCard type="tip" />
      </SignCardContainer>
    </div>
  );
}

export default SignCardExamples;
