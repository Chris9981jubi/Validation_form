import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .oneOf(['christypjubi@gmail.com'], 'Email must be christypjubi@gmail.com')
    .required('Required'),
  password: Yup.string()
    .matches(/^rishiME@199$/, 'Password must be rishiME@199') 
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const App = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Welcome!</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ handleChange, handleBlur, values, isSubmitting, errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>
              
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || !Object.keys(touched).length || Object.keys(errors).length}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
      
      <div className="image-wrapper">
        <img src="https://cxotoday.com/wp-content/uploads/2024/05/Integrating-PIM-with-Generative-AI-for-Efficient-Data-Management.jpeg" alt="Form illustration" />
      </div>
    </div>
  );
};

export default App;
