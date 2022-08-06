import React, { useState, useRef } from 'react';
import { withProtected } from '../hooks/routes';

function SignUp({ auth }) {
  const { createUserWithEmailAndPassword, error } = auth;
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const email = useRef();
  const password = useRef();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
    createUserWithEmailAndPassword(email.current.value, password.current.value);
  };

  return (
    <div className='w-full lg:h-screen max-w-[1240px] mx-auto p-3'>
      <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Sign Up
        </p>
        <h2 className='py-4'>
          Sign Up <br />
          <small>Using Email and Password</small>
        </h2>
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form onSubmit={handleSignUp}>
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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
  );
}

export default withProtected(SignUp);
