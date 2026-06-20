import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Forgot Password email:', values.email);
      alert('Password reset link sent!');
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">Enter your email to receive a password reset link.</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" className="w-full bg-[#FF6333] text-white p-2 rounded hover:bg-orange-600 transition-colors">
          Send Reset Link
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          Remember your password? <Link to="/login" className="text-[#FF6333] hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
