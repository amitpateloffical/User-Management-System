import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin@vidyagxp.com' && password === 'Amit@121') {
      toast.success('LogIn Successfully.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/dashboard');
    } else {
      toast.error('Invalid username or password. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='login-container flex flex-col min-h-screen'>
      <div className='flex flex-col justify-center items-center flex-grow'>
        <div className='w-full max-w-md p-6 bg-white border border-black rounded-md shadow-md sm:mx-4 lg:mx-0'>
          <div className='flex flex-col gap-8 p-5'>
            <div className='text-xl font-semibold text-center text-[#e69743]'>
              WELCOME TO USER MANAGEMENT RECORD SYSTEM
            </div>
            <div className='flex justify-center items-center'>
              <img src='https://connexo.io/assets/img/logo/logo.png' className='h-24 w-full max-w-xs' alt='Logo' />
            </div>
            <div className="flex flex-col">
              <label><b>User Name</b></label>
              <input
                className="w-full py-3 px-2 border border-black rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label><b>Password</b></label>
              <input
                className="w-full py-3 px-2 border border-black rounded-md"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-[#e69743] py-2 w-full rounded-md text-white"
                onClick={()=>handleLogin()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
