import React, { useState } from 'react'

function Register () {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: ''
  })

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' }) // Clear the error when the user starts typing
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username) newErrors.username = 'Username is required.'
    if (!formData.email) {
      newErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.'
    }
    if (!formData.password) newErrors.password = 'Password is required.'
    if (!formData.rePassword) {
      newErrors.rePassword = 'Please confirm your password.'
    } else if (formData.password !== formData.rePassword) {
      newErrors.rePassword = 'Passwords do not match.'
    }
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setSuccessMessage('Registration successful!')
      console.log('Form Data:', formData)
      setFormData({
        username: '',
        email: '',
        password: '',
        rePassword: ''
      })
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 w-[400px] bg-gray-900 text-white p-6 rounded-md shadow-md'
      >
        <h2 className='text-3xl font-bold text-center mb-4'>Register Page</h2>

        {successMessage && (
          <p className='text-green-500 text-center'>{successMessage}</p>
        )}

        <input
          className={`w-full text-black py-2 px-3 rounded-md outline-none border-2 ${
            errors.username ? 'border-red-500' : 'border-gray-700'
          } focus:border-blue-500`}
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter Username...'
        />
        {errors.username && (
          <p className='text-red-500 text-sm'>{errors.username}</p>
        )}

        <input
          className={`w-full text-black py-2 px-3 rounded-md outline-none border-2 ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } focus:border-blue-500`}
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='you@gmail.com'
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

        <input
          className={`w-full text-black py-2 px-3 rounded-md outline-none border-2 ${
            errors.password ? 'border-red-500' : 'border-gray-700'
          } focus:border-blue-500`}
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password...'
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password}</p>
        )}

        <input
          className={`w-full text-black py-2 px-3 rounded-md outline-none border-2 ${
            errors.rePassword ? 'border-red-500' : 'border-gray-700'
          } focus:border-blue-500`}
          type='password'
          name='rePassword'
          value={formData.rePassword}
          onChange={handleChange}
          placeholder='Re-enter Password...'
        />
        {errors.rePassword && (
          <p className='text-red-500 text-sm'>{errors.rePassword}</p>
        )}

        <button
          type='submit'
          className='w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-800 text-white font-bold'
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
