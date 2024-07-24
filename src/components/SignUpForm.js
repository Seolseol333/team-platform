import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate= useNavigate();

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
      studentId: Yup.string().matches(/^[0-9]{8}$/, '학번은 8자리 숫자여야 합니다').required('학번을 입력해주세요'),
      email: Yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일을 입력해주세요'),
      phone: Yup.string().matches(/^[0-9]{10,11}$/, '유효한 전화번호를 입력해주세요').required('전화번호를 입력해주세요'),
      nickname: Yup.string().required('닉네임을 입력해주세요'),
      password: Yup.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다').required('비밀번호를 입력해주세요'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다').required('비밀번호 확인을 입력해주세요'),
    }),
    onSubmit: values => {
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '15px', 
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
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
