<<<<<<< HEAD
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
=======
import React from 'react'; /*리엑트 언어를 쓸 것이기 때문에 import를 해줘야함*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; /*라우터를 연결해야 다른 페이지로 넘어가게 할 수 있음 */
import Home from './pages/Home/Home'; /*각 파일들을 import해줘야함*/
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> ec5cb9c (add comments)
        </Routes>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
/* div className을 써야 라우트가 랜더링 될 수 있도록 레이아웃과 스타일을 정의할 수 있음 */
/*router -> className -> routes -> route 순서로 써줌으로써 각 요소를 누르면 각 경로로 이동할 수 있도록 정의해줌 */
>>>>>>> 938571c (Update a)
export default App;

=======
/* div className을 써야 라우트가 랜더링 될 수 있도록 레이아웃과 스타일을 정의할 수 있음 */
/*router -> className -> routes -> route 순서로 써줌으로써 각 요소를 누르면 각 경로로 이동할 수 있도록 정의해줌*/
export default App;
>>>>>>> ec5cb9c (add comments)
