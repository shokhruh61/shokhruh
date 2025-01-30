import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Navigation uchun hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form muvaffaqiyatli yuborilgandan so'ng Login sahifasiga o'tamiz
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[400px] bg-gray-900 p-6 rounded-md shadow-md"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Register Page</h2>

        <input
          className="w-full py-2 px-3 rounded-md text-black outline-none border-2 border-gray-700 focus:border-blue-500"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@gmail.com"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          className="w-full py-2 px-3 rounded-md text-black outline-none border-2 border-gray-700 focus:border-blue-500"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password..."
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-800 text-white font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
