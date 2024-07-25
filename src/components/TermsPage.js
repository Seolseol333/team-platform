import React, { useState } from 'react';
import './TermsPage.css';

const TermsPage = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  const handleTermsCheckboxChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };

  const handlePrivacyCheckboxChange = (event) => {
    setIsPrivacyChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isTermsChecked && isPrivacyChecked) {
      alert('모든 약관에 동의하셨습니다.');
    } else {
      alert('모든 약관에 동의하셔야 합니다.');
    }
  };

  return (
    <div className="terms-container">
      <h1>약관 동의</h1>
      
      <div className="terms-section">
        <h2>이용약관</h2>
        <div className="terms-content">
          <p>
            여기에 이용약관 내용을 삽입하세요...
            약관 내용이 길어지면 스크롤 바가 생깁니다.
          </p>
        </div>
        <div className="terms-checkbox">
          <label htmlFor="terms">이용약관에 동의합니다</label>
          <input
            type="checkbox"
            id="terms"
            checked={isTermsChecked}
            onChange={handleTermsCheckboxChange}
          />
        </div>
      </div>
      
      <div className="terms-section">
        <h2>개인정보 수집 및 이용</h2>
        <div className="terms-content">
          <p>
            여기에 개인정보 수집 및 이용 약관 내용을 삽입하세요...
            약관 내용이 길어지면 스크롤 바가 생깁니다.
          </p>
        </div>
        <div className="terms-checkbox">
          <label htmlFor="privacy">개인정보 수집 및 이용에 동의합니다</label>
          <input
            type="checkbox"
            id="privacy"
            checked={isPrivacyChecked}
            onChange={handlePrivacyCheckboxChange}
          />
        </div>
      </div>
      
      <button onClick={handleSubmit} disabled={!isTermsChecked || !isPrivacyChecked}>
        제출
      </button>
    </div>
  );
};

export default TermsPage;
