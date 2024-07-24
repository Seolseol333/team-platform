import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      studentId: '',
      email: '',
      phone: '',
      nickname: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      studentId: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10,11}$/, 'Invalid phone number').required('Required'),
      nickname: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor="studentId">Student ID</label>
        <input id="studentId" type="text" {...formik.getFieldProps('studentId')} />
        {formik.touched.studentId && formik.errors.studentId ? <div>{formik.errors.studentId}</div> : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" {...formik.getFieldProps('phone')} />
        {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      </div>
      <div>
        <label htmlFor="nickname">Nickname</label>
        <input id="nickname" type="text" {...formik.getFieldProps('nickname')} />
        {formik.touched.nickname && formik.errors.nickname ? <div>{formik.errors.nickname}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...formik.getFieldProps('password')} />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
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
