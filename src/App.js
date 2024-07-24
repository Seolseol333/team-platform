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
    textAlign: 'center', // 텍스트를 중앙 정렬
  };

  const containerStyle = {
    display: 'flex', // 컨테이너를 flexbox로 설정
    flexDirection: 'column', // flexbox 방향을 세로로 설정
    alignItems: 'center', // 수직 중앙 정렬
    justifyContent: 'center', // 수평 중앙 정렬
    height: '100vh', // 화면 전체 높이 사용
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={
            <>
              <div style={style}>{name}</div>
              <SignUpForm />
            </>
          } />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

