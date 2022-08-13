import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { BiShow } from 'react-icons/bi';

function Login() {
  const { resetPassword } = UserAuth();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setError('');
      Cookies.set('loggedIn', true);
      toast.success('User signed in successfully');
      router.push('/admin');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
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
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={90}
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 relative'>
                      Password{' '}
                      <BiShow
                        className='absolute right-5 top-12 mt-1 cursor-pointer'
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      />
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 '
                      type={showPassword ? 'text' : 'password'}
                      onChange={(e) => setPassword(e.target.value)}
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
            <a className='underline' onClick={async () => resetPassword(email)}>
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
