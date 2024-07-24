import React from 'react';
import SignUpForm from './components/SignUpForm';

function App() {
  const name = '회원가입';
  const style = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 50};
  
  return (
    <div style={style}>{name} </div>
    <SignUpForm />
  );
}

export default App;
