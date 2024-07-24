import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import TermsPage from './components/TermsPage';

function App() {
  const name = '회원가입';
  const style = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 50,
    textAlign: 'center', 
  };

  const containerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center', 
    height: '100vh', 
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={
            <div>
              <div style={style}>{name}</div>
              <SignUpForm />
            </div>
          } />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

