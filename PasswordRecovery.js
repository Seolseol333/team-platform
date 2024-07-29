import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function PasswordRecovery({ onCancel }) { /*온캔슬이라는 프로퍼티를 받아서 함수 실행*/
  const [name, setName] = useState(''); /*name의 초기값을 ''로 하고 setName을 통해 상태 변화 시킴*/
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => { /*e라는 값을 받아서 name을 변경할 수 있게 하는 함수 정의*/
    setName(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleSubmit = async (e) => { /*제출했을 때 페이지가 새로고침되는 것을 막음. 잘못 입력했으면 에러 메시지를 띄워야하기 때문에 필요한 부분*/
    e.preventDefault();

    try {
      const response = await axios.post('/api/recover-password', { /*대기 상태에 두고 에러 메시지를 띄운다는 뜻*/
        name,
        studentId,
      }); /*response는 네트워크 요청 결과를 담음. 추후 수정 불가. await가 들어있기 때문에 요청이 완료될때까지 대기함*/
      setPassword(response.data.password); /*서버에서 데이터를 받아 상태 변수에 저장함*/
      setError(''); /*에러 메시지를 초기화함*/
    } catch (error) {
      setError('비밀번호를 찾을 수 없습니다. 이름과 학번을 확인해주세요.'); /*에러를 찾으면 에러 메시지 출력*/
      setPassword(''); /*비밀번호 상태 초기화*/
    }
  };

  return (
    <div className="password-recovery">
      <h2>비밀번호 찾기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름:</label>
          <input type="text" value={name} onChange={handleNameChange} required />{/*이름란에 텍스트 타입의 이름을 치면, handleNameChange 함수를 호출하여 네임을 변경함. 필수 입력 요소*/}
        </div>
        <div>
          <label>학번:</label>
          <input type="text" value={studentId} onChange={handleStudentIdChange} required />
        </div>
        <button type="submit">비밀번호 찾기</button> {/*이 버튼을 누르면 제출됨*/}
      </form>
      {password && ( /*패스워드가 맞다면 비밀번호가 무엇인지를 띄워주는?*/
        <div>
          <h2>비밀번호:</h2>
          <p>{password}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={onCancel}>뒤로가기</button>
    </div>
  );
}

export default PasswordRecovery;