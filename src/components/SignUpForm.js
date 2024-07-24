import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      studentId: '',
      email: '',
      phone: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('이름을 입력해주세요'),
      studentId: Yup.string()
        .matches(/^[0-9]{8}$/, '학번은 8자리 숫자여야 합니다')
        .required('학번을 입력해주세요'),
      email: Yup.string()
        .email('유효한 이메일 주소를 입력해주세요')
        .required('이메일을 입력해주세요'),
      phone: Yup.string()
        .matches(/^[0-9]{10,11}$/, '유효한 전화번호를 입력해주세요')
        .required('전화번호를 입력해주세요'),
      nickname: Yup.string().required('닉네임을 입력해주세요'),
      password: Yup.string()
        .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
        .required('비밀번호를 입력해주세요'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
        .required('비밀번호 확인을 입력해주세요'),
    }),
    onSubmit: values => {
      // 유효성 검사 통과 후 약관 동의 페이지로 이동
      navigate('/terms');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>이름</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} style={styles.input} />
        {formik.touched.name && formik.errors.name ? <div style={styles.error}>{formik.errors.name}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="studentId" style={styles.label}>학번</label>
        <input id="studentId" type="text" {...formik.getFieldProps('studentId')} style={styles.input} />
        {formik.touched.studentId && formik.errors.studentId ? <div style={styles.error}>{formik.errors.studentId}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>이메일</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} style={styles.input} />
        {formik.touched.email && formik.errors.email ? <div style={styles.error}>{formik.errors.email}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="phone" style={styles.label}>전화번호</label>
        <input id="phone" type="text" {...formik.getFieldProps('phone')} style={styles.input} />
        {formik.touched.phone && formik.errors.phone ? <div style={styles.error}>{formik.errors.phone}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="nickname" style={styles.label}>닉네임</label>
        <input id="nickname" type="text" {...formik.getFieldProps('nickname')} style={styles.input} />
        {formik.touched.nickname && formik.errors.nickname ? <div style={styles.error}>{formik.errors.nickname}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>비밀번호</label>
        <input id="password" type="password" {...formik.getFieldProps('password')} style={styles.input} />
        {formik.touched.password && formik.errors.password ? <div style={styles.error}>{formik.errors.password}</div> : null}
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="confirmPassword" style={styles.label}>비밀번호 확인</label>
        <input id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} style={styles.input} />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div style={styles.error}>{formik.errors.confirmPassword}</div> : null}
      </div>
      <button type="submit" style={styles.button}>제출</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex', // 폼을 flexbox 컨테이너로 설정하여 내부 요소를 유연하게 배치할 수 있습니다.
    flexDirection: 'column', // flexbox 방향을 세로로 설정하여 내부 요소들이 위에서 아래로 배치됩니다.
    alignItems: 'center', // flexbox의 내부 요소들을 수직 중앙으로 정렬합니다.
    justifyContent: 'center', // flexbox의 내부 요소들을 수평 중앙으로 정렬합니다.
    maxWidth: '500px', // 폼의 최대 너비를 500px로 제한합니다.
    margin: '0 auto', // 폼을 수평 중앙에 배치합니다. 위아래 마진은 0이고 좌우 마진은 자동으로 설정됩니다.
    padding: '20px', // 폼 내부의 모든 면에 20px의 패딩을 추가합니다.
    border: '1px solid #ccc', // 폼에 회색(#ccc) 1px 실선 테두리를 추가합니다.
    borderRadius: '10px', // 폼의 모서리를 둥글게 설정하여 10px 반지름을 가집니다.
    backgroundColor: '#f9f9f9', // 폼의 배경색을 연한 회색(#f9f9f9)으로 설정합니다.
  },
  formGroup: {
    marginBottom: '15px', // 각 폼 그룹 아래에 15px의 마진을 추가합니다.
    width: '100%', // 폼 그룹의 너비를 부모 요소의 100%로 설정합니다.
  },
  label: {
    display: 'block', 
    marginBottom: '5px', 
    fontWeight: 'bold',
  },
  input: {
    width: '90%', 
    padding: '10px', 
    borderRadius: '4px', 
    border: '1px solid #ccc', 
  },
  error: {
    color: 'red', 
    fontSize: '12px', 
    marginTop: '5px', 
  },
  button: {
    padding: '10px 20px', 
    borderRadius: '5px',
    border: 'none', 
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer', 
  },
};

export default SignUpForm;
