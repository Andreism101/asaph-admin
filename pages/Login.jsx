import { useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import React from 'react';
import Bg from '../public/ASA-Custom2.png';
import Logo from '../public/ASA-Logo.png';


const mockCredentials = {
  username: 'Ezi',
  password: '62187'
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const usernamePattern = /^[a-zA-Z0-9]+$/;
    const isUsernameValid = usernamePattern.test(username);
    const isPasswordValid = usernamePattern.test(password);

    if (!username || !password) {
      setValidationError('Please enter both username and password.');
    } else if (!isUsernameValid || !isPasswordValid) {
      setValidationError('Invalid characters detected. Only alphabets and numbers are allowed.');
    } else {
      if (username === mockCredentials.username && password === mockCredentials.password) {
        console.log('Authentication successful!');
        window.location.href = '/Dashboard';
      } else {
        setValidationError('Authentication failed. Please check your username and password.');
      }
    }
  };
  return (
    <div className='h-screen grid grid-cols-1 justify-items-center content-center bg-slate-600'>
      <div className='flex justify-center items-center '>
        <Image src={Bg} width={700} height={700} style={{ objectFit: 'cover' }} quality={100} />
      </div>

      <div className='absolute w-full h-full top-0 flex flex-col justify-center items-center'>
        <form action='' method='post' onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-[#173136] p-8 px-8 rounded-xl'>
          <div className='flex flex-col justify-center items-center mb-5'>
            <Image src={Logo} width={100} height={100} style={{ backgroundSize: 'auto' }} />
          </div>
          <div className='flex flex-col text-white py-2'>
            <label>Username</label>
            <input
              className='rounded mt-2 p-1 text-black focus:border-orange-400 focus:bg-gray-300 focus:outline-none'
              type='text'
              name='username'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className='flex flex-col text-white py-2'>
            <label>Password</label>
            <input
              className='rounded mt-2 p-1 text-black focus:border-orange-400 focus:bg-gray-300 focus:outline-none'
              type='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {validationError && <p className='text-red-500'>{validationError}</p>}
          <div className='flex justify-between text-orange-400'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' name='' id='' /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <div className='flex justify-end'>
            <button className='w-24 my-5 py-2 bg-[#4DA9EA] rounded-lg text-white font-semibold' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='bottom-0 fixed w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
