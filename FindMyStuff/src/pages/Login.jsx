import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false)
  const [resetStep, setResetStep] = useState(1) // 1: email, 2: OTP, 3: new password
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = () => {
    // Your login logic will go here
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    // In step 1: Send OTP to email
    if (resetStep === 1) {
      console.log('Sending OTP to:', email)
      // API call to send OTP to email
      setResetStep(2)
    } 
    // In step 2: Verify OTP
    else if (resetStep === 2) {
      console.log('Verifying OTP:', otp)
      // API call to verify OTP
      setResetStep(3)
    } 
    // In step 3: Reset password
    else if (resetStep === 3) {
      if (newPassword !== confirmPassword) {
        alert("Passwords don't match")
        return
      }
      console.log('Resetting password')
      // API call to reset password
      setForgotPassword(false)
      setResetStep(1)
      // Clear all fields
      setEmail('')
      setOtp('')
      setNewPassword('')
      setConfirmPassword('')
    }
  }

  return (
    <div className='flex flex-col gap-2 justify-center items-center prata-regular h-[80vh]'>
      {!forgotPassword ? (
        // Regular login form
        <>
          <p className='text-4xl mb-5'>LogIn</p>
          <form className='flex gap-2 flex-col justify-center items-center w-[70vw] sm:w-[25vw] gap-4' action="">
            <input className='a border outline-none p-2 w-full' type="text" placeholder='Username' name='Username' required />
            <input className='border outline-none p-2 w-full' type="password" placeholder='password' name='password' required />
            <div className='w-full border bg-black text-white text-center py-2 rye-regular text-xl'><button>Login</button></div>
            <div className='w-full flex justify-between'>
              <button 
                type="button" 
                className='text-blue-700 text-sm' 
                onClick={() => setForgotPassword(true)}
              >
                Forgot password?
              </button>
              <Link className='text-blue-700 text-sm' to="/signup">don't have account</Link>
            </div>
          </form>
        </>
      ) : (
        // Forgot password form
        <>
          <p className='text-4xl mb-5'>Forgot Password</p>
          <form onSubmit={handleForgotPassword} className='flex gap-2 flex-col justify-center items-center w-[70vw] sm:w-[25vw] gap-4'>
            {resetStep === 1 && (
              // Step 1: Email input
              <>
                <p className='text-gray-600 text-center'>Enter your email to reset your password</p>
                <input 
                  className='border outline-none p-2 w-full' 
                  type="email" 
                  placeholder='Email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <div className='w-full border bg-black text-white text-center py-2 rye-regular text-xl'>
                  <button type="submit">Send OTP</button>
                </div>
              </>
            )}
            
            {resetStep === 2 && (
              // Step 2: OTP verification
              <>
                <p className='text-gray-600 text-center'>Enter the OTP sent to your email</p>
                <input 
                  className='border outline-none p-2 w-full' 
                  type="text" 
                  placeholder='OTP' 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required 
                />
                <div className='w-full border bg-black text-white text-center py-2 rye-regular text-xl'>
                  <button type="submit">Verify OTP</button>
                </div>
              </>
            )}
            
            {resetStep === 3 && (
              // Step 3: New password
              <>
                <p className='text-gray-600 text-center'>Enter your new password</p>
                <input 
                  className='border outline-none p-2 w-full' 
                  type="password" 
                  placeholder='New Password' 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required 
                />
                <input 
                  className='border outline-none p-2 w-full' 
                  type="password" 
                  placeholder='Confirm Password' 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
                <div className='w-full border bg-black text-white text-center py-2 rye-regular text-xl'>
                  <button type="submit">Reset Password</button>
                </div>
              </>
            )}
            
            <div className='w-full flex justify-between'>
              <button 
                type="button" 
                className='text-blue-700 text-sm' 
                onClick={() => {
                  setForgotPassword(false)
                  setResetStep(1)
                }}
              >
                Back to Login
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default Login
