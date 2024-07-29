import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; /*다른 페이지로 이동을 할 수 있게 하려면 이걸 미리 임포트 해줘야함*/
import './Login.css';
import PasswordRecovery from './PasswordRecovery';

function Login() {
  const [formData, setFormData] = useState({ /*상태가 변화하는 것을 적용할 수 있는 함수. setFormData로 formData의 상태값을 바꿀 수 있음*/
    username: '',
    password: '',
  });
  const [error, setError] = useState(''); /* usestate는 상태를 관리하겠다는 뜻. error의 초기값음 ''인데, setError를 통해 초깃값에 변화를 주겠다는 것*/
  const [isFindingPassword, setIsFindingPassword] = useState(false); /*isfindingpassword의 초기값이 false이고 setisfindingpassword를 통해서 상태에 변화를 주겠다는 뜻*/
  const navigate = useNavigate(); // Initialize useNavigate /*특정 경로로 이동을 할 수 있게 해줌*/

  /*isfindingpassword는 현재 비밀번호찾기를 진행 중인지 여부를 묻고 있는 것.*/
  const handleChange = (e) => { /*사용자가 무언가 입력을 하면, 그 입력값에서 name과 value를 추출해서 저장함*/
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {/*폼을 제출했을 때 호출됨*/
    e.preventDefault();
    if (formData.username && formData.password) { /*유저 이름과 비밀번호를 입력하면 대시보드로 이동할 수 있게 함*/
      setError('');
      navigate('/dashboard'); // Redirect to Dashboard after successful login
    } else { /*입력을 안했다면 입력해달라고 문구가 뜸*/
      setError('아이디와 비밀번호를 입력해주세요.');
    }
  };

  const handleLogout = () => { /*로그아웃 버튼을 눌렀을 때 호출됨*/
    setFormData({/*로그아웃할 때 입력필드 값을 비워서 다음번 로그인할 때 다시 입력할 수 있도록 만듦*/
      username: '',
      password: '',
    });
    setError('');
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {/*엔터를 눌렀을 때 이벤트가 발생하게 하는 부분*/
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);/*윈도우라는 객체에 키다운 이벤트 리스너를 추가함*/
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown); /*keydown은 키보드를 눌렀을 때 발생하는 이벤트를 뜻함*/
    };/*여기서 window객체란, 가장 상위 객체로써 사용자와 웹페이지 간의 상호작용을 제어할 수 있는 객체를 뜻함*/
  }, [formData]);

  const handleFindCredentials = () => { /*자격 증명 찾기 작업을 할때 호출됨*/
    setIsFindingPassword(true);/*여기서 비밀번호 찾기를 진행하고 있음을 나타냄*/
  };

  const handleSignUp = () => { /*회원가입을 시도할 때 호출되어서 회원가입 페이지로 넘어가게 함*/
    navigate('/signup'); // Navigate to the SignUp component
  };

  return (
    <div className="Login">
      <header className="login-header"> {/*얘는 홈 화면과 다르게 헤더에 아무것도 없음*/}
      </header>
      <div className="login-container">
        {isFindingPassword ? (
          <PasswordRecovery onCancel={() => setIsFindingPassword(false)} /> /*비밀번호 찾기를 진행하고 있으면 이 부분을 띄워줌*/
        ) : (/*패스워드리커버리는 비밀번호 복구를 의미함.oncancel이 호출되었을 때 비밀번호 찾기를 그만한다는 뜻임. ()는 아무런 인자를 받지 않고 진행된다는 뜻 - 뒤로가기를 누르기만 하면 된다는 것임*/
          <>
            <div className='Login-box'> {/*비밀번호찾기를 진행 중이지 않을 때는 이 부분을 띄워줌*/}
              <h2>로그인</h2>
              <form className="login-form" onSubmit={handleSubmit}> {/*폼 제출 시 위에 정의된 핸들서브밋을 호출*/}
                <div className="form-group">
                  <label htmlFor="username">아이디</label> {/*아이디를 입력하는 부분. 폼데이터에서 유저네임에 해당하고, 입력 필드에 입력 시 handlechange가 호출됨*/}
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required /*필수로 입력해야한다는 것을 뜻함.*/
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">비밀번호</label> 
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">로그인</button> {/*타입이 제출이기 때문에 누르는 순간 폼이 제출됨*/}
              </form>
              {error && <p className="error-message">{error}</p>} {/* && : 앞에꺼 이면 뒤에꺼이다 라는 연산자. 즉, 에러 이면 에러메시지를 출력하라는 뜻*/}
              <div className="extra-buttons">
                <button className="text-button" onClick={handleFindCredentials}> {/*비번 찾기 버튼 누르면 비번 찾는 함수를 호출한다는 뜻*/}
                  비밀번호 찾기
                </button>
                <button className="text-button" onClick={handleSignUp}>
                  회원가입하기
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <footer>
        <p>© 2024 CNU</p>
        <div className="footer-links">
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Login;
