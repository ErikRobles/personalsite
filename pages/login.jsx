import React, { useRef } from 'react';
import { withPublic } from '../hooks/routes';
import Link from 'next/link';

function Login({ auth }) {
  const { signInUserWithEmailAndPassword, resetPassword, error } = auth;
  const email = useRef();
  const password = useRef();

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signInUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    );
  };

  return (
    <>
      <div className='flex flex-col items-center my-30 p-3 max-w-[1240px] mx-auto'>
        {/* <h1 className='py-4 text-gray-600'>Login</h1> */}
        {/* <button className='btn btn-primary p-3 my-4' onClick={loginWithGoogle}>
          Log In with Google
        </button> */}
        <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Sign In
          </p>
          <h2 className='py-4'>
            <small>With Email and Password</small>
          </h2>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={handleSignIn}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      ref={email}
                      maxLength={90}
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Password</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='password'
                      ref={password}
                      maxLength={90}
                    />
                  </div>
                </div>

                <button
                  className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'
                  type='submit'
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div className='mt-[40px] cursor-pointer'>
            <a
              className='underline'
              onClick={async () => resetPassword(email.current.value)}
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default withPublic(Login);
