import React from 'react';
import "../style/login-register.css";
import Header from './header';
import Register from './register';
const Login = () => {

  return (
    <>
      <div className='bg-slate-300 absolute h-[100%] w-[100%] sm:hidden'>
        <Header />
        <Register />
      </div>
      <div className='shows mobilel bg-slate-300 h-[100%] absolute'>
        <div className=''>
          <div className='bg-slate-600 h-[50px] flex flex-row justify-between items-start'>
            <div className='white px-4 p-[auto] font-medium big'>
              Snake and Ladder
            </div>
          </div>
        </div>
        <Register />

      </div>

      <div className='footer1 relative top-[95vh]'>
        <a href="https://github.com/Thapaswinithota?tab=overview&from=2024-10-01&to=2024-10-31">
          @2021-2025 Snake and Ladder Developed by
          Venkata Thapaswini Thota
        </a>
      </div>
    </>
  )
}

export default Login