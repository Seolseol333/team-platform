import React from 'react';
import { Link } from 'react-router-dom'; /*라우터 설정해둔 것도 임포트 해주고, 아이콘 관련해서도 임포트해줘야함*/
import { IoPerson } from "react-icons/io5";
import './Home.css'; /*css파일도 임포트 해주기*/

function Home() {
  return (
    <div className="Home">
      <header className="App-header"> {/*앱 헤더에는 로그인과 회원가입 요소가 있고, 로그인 헤더에는 이게 없어서 둘이 구분된 헤더를 사용 */}
        <div className="login-signup"> {/*로그인 회원가입 버튼 있는 곳을 정의함*/}
          <IoPerson size={24} /> {/* 아이콘의 크기가 24*24 */}
          <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link> {/* 각각의 버튼을 누르면 /login 과 /signup으로 이동하게 해주는 링크*/}
        </div>
      </header> {/*헤더에 있는 것들은 로그인과 회원가입 정도이기 때문에 여기서 닫고 이제 메인으로 넘어가는 것임*/}
      <main className="App-content">
        <section className="hero"> {/* 팀프로젝트 관리 서비스 - 지금 시작하기 버튼이 있는 섹션을 정의함 */}
          <div className="hero-text"> 
            <h1>팀 프로젝트 관리 서비스</h1>
            <p>쉬운 진행 상황 체크, 목표 상기</p>
            <button className="cta-button">지금 시작하기</button>
          </div>
        </section>
        <section className="features"> {/* 주요 기능에 대해 설명하는 섹션을 정의함. 여기엔 사진도 들어가서 밑에 img로 사진을 넣어줌*/}
          <h2>주요 기능</h2>
          <div className="feature-list"> {/* 세 가지 주요 기능을 묶어서 정의해주고 이후 세 가지에 대해 각각 정의해줌*/}
            <div className="feature-item"> {/* 근데 다른 애들은 각각의 섹션을 정의하면 위아래 배치가 되었는데 얘는 왜 좌우 배치로 들어가지? - space-round로 써서*/}
              <img src="contribute.png" alt="Feature 1" /> {/* alt는 이미지가 안뜰 때 텍스트로 제공되는 부분. 텍스트에 대한 설명을 써놓는 것*/}
              <h3>과제별 기여도 측정</h3>
              <p>전체, 월별, 주별 기여도를 자동으로 제공</p>
            </div>
            <div className="feature-item">
              <img src="" alt="Feature 2" />
              <h3>역할, 업무 분담</h3>
              <p>과제별, 인원별 명확한 업무 분담, 정리</p>
              <p>해야하는 활동에 대한 가이드라인 제시</p>
            </div>
            <div className="feature-item">
              <img src="whentomeet.png" alt="Feature 3" />
              <h3>회의 시간 정하기</h3>
              <p>가능한 시간대를 직접 고를 수 있는 편리한 서비스</p>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <h2>서비스 이용 방법</h2>
          <p>학번으로 팀원을 간편하게 초대해고, 일정과 목표 상기를 통한 편리한 프로젝트 관리</p>
        </section>
        <section className="testimonials">
          <h2>사용자 후기</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"이 서비스 덕분에 프로젝트 관리가 정말 쉬워졌어요!"</p>
              <p>- 사용자 1</p>
            </div>
            <div className="testimonial-item">
              <p>"프로젝트 목표를 달성하는 데 큰 도움이 되었습니다."</p>
              <p>- 사용자 2</p>
            </div>
          </div>
        </section>
        <section className="faq">
          <h2>자주 묻는 질문</h2> {/*이 부분은 위의 서비스 특징과 다르게 위아래 배치로 묶어서 정의함*/}
          <div className="faq-list">
            <div className="faq-item">
              <h3>질문 1</h3>
              <p>질문 1에 대한 답변</p>
            </div>
            <div className="faq-item">
              <h3>질문 2</h3>
              <p>질문 2에 대한 답변</p>
            </div>
          </div>
        </section>
        <footer> {/*여기가 맨 아래 위치하는 부분*/}
          <p>© 2024 CNU </p>
          <div className="footer-links">
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
          </div> {/* 각각의 링크로 이어지는 요소를 |로 구분 지어서 표시함*/}
        </footer>
      </main>
    </div>
  );
}

export default Home;
