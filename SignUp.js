import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [step, setStep] = useState(1); /*스텝은 단계별 상태변화를 말하는 것. 약관 동의 다음에 정보 입력을 하는 등 단계가 있는 경우에 사용*/
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phone: '',
    studentnumber: '',
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep = () => {/*입력값이 타당한지를 판단하는 부분. 써야할 걸 안썼거나 체크할 걸 안 체크하면 오류 메시지 출력*/
    const newErrors = {};
    if (step === 1) {/*이게 첫번째 단계라는 뜻*/
      if (!formData.terms) newErrors.terms = "서비스 약관에 동의해야 합니다."; /*약관 동의 체크를 안하면 에러 메시지를 띄우라는 뜻*/
      if (!formData.privacy) newErrors.privacy = "개인 정보 수집 및 이용에 동의해야 합니다."; /*개인정보 수집 동의 체크를 안하면 에러 메시지 띄움*/
    } else if (step === 2) { /*이게 다음 단계로 넘어가는 것임*/
      if (!formData.username) newErrors.username = "아이디를 입력해주세요.";
      if (!formData.password) newErrors.password = "비밀번호를 입력해주세요.";
      if (!formData.confirmPassword) newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "비밀번호가 다릅니다.";
      if (!formData.name) newErrors.name = "이름을 입력해주세요.";
      if (!formData.email) newErrors.email = "이메일을 입력해주세요.";
      if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
      if (!formData.studentnumber) newErrors.studentnumber = "학번을 입력해주세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; /*에러가 있는 경우 length가 있음. 없으면 length가 0임. 에러가 있는지 없는지를 알려주는 코드*/
  };

  const nextStep = () => { /*만약 체크 박스가 다 되었다면, 다음 스텝으로 넘어가게 하는 함수 정의*/
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1); /*이전 단계로 돌아가게 하는 함수 정의*/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // back
      console.log(formData); /*오류 확인을 위해 콘솔에 해당 내용을 추가하는 부분*/
    }
  };

  return (
    <div className="SignUp">
      <header className="signup-header">
      </header>
      <h2>회원가입</h2>
      <div className="signup-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
      <div className="signup-content">
        <form className="signup-form" onSubmit={handleSubmit}>
          {step === 1 && ( /*1단계이면 다음과 같은 내용을 표시함*/
            <div className="step">
              <h3>약관 동의</h3>
              <div className="form-group">
                <label>서비스 약관 동의</label>
                <textarea readOnly value="약관 내용" /> {/*읽기만 가능한 부분*/}
                <input type="checkbox" name="terms" onChange={handleChange} /> 동의합니다. {/*체크박스 구현 및 체크가 가능하게 하는 코드*/}
                {errors.terms && <p className="error">{errors.terms}</p>} {/*에러가 나면 에러 메시지를 출력함. 내용은 위에 정의됨*/}
              </div>
              <div className="form-group">
                <label>개인 정보 수집 및 이용 동의</label>
                <textarea readOnly value="개인 정보 수집 및 이용 동의 내용" />
                <input type="checkbox" name="privacy" onChange={handleChange} /> 동의합니다.
                {errors.privacy && <p className="error">{errors.privacy}</p>}
              </div>
              <button type="button" onClick={nextStep}>다음</button> {/*그 다음으로 넘어가게 하는 버튼*/}
            </div>
          )}
          {step === 2 && (
            <div className="step">
              <h3>정보 입력</h3>
              <div className="form-group">
                <label htmlFor="username">아이디</label> {/*이 라벨이 id가 username인 것과 연결되어있다는 뜻*/}
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">비밀번호 확인</label>
                <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">전화번호</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="studentnumber">학번</label>
                <input type="text" id="studentnumber" name="studentnumber" value={formData.studentnumber} onChange={handleChange} required />
                {errors.studentnumber && <p className="error">{errors.studentnumber}</p>}
              </div>
              <button type="button" onClick={prevStep}>이전</button> {/*이전 단계로 가거나 다음 단계로 가는 버튼*/}
              <button type="button" onClick={nextStep}>다음</button>
            </div>
          )}
          {step === 3 && (
            <div className="step">
              <h3>가입 완료</h3>
              <p>가입이 완료되었습니다. 아래 버튼을 클릭하여 로그인하세요.</p>
              <button type="submit">회원가입 완료</button>
            </div>
          )}
        </form>
      </div>
      <footer>
          <p>© 2024 CNU </p>
          <div className="footer-links">
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
          </div>
        </footer>
    </div>
  );
}

export default SignUp;
