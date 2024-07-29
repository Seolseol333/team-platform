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

  const App = () => {
    return (
      <div className="App">
        <TermsPage />
      </div>
    );
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

<<<<<<< HEAD
=======
/* div className을 써야 라우트가 랜더링 될 수 있도록 레이아웃과 스타일을 정의할 수 있음 */
/*router -> className -> routes -> route 순서로 써줌으로써 각 요소를 누르면 각 경로로 이동할 수 있도록 정의해줌 */
>>>>>>> 938571c (Update a)
export default App;

