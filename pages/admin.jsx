import React, { useRef } from 'react';
import { withProtected } from '../hooks/routes';

function Admin({ auth }) {
  const { logout, user, deleteAccount, updatePassword } = auth;
  const confirmPassword = useRef();
  const password = useRef();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    await updatePassword(confirmPassword.current.value, password.current.value);
  };

  return (
    <div className='flex flex-col items-center my-30 p-3'>
      <h1 className='py-4 text-gray-600'>Admin</h1>
      <button
        className='btn btn-primary p-3 my-4 hover:scale-[103%] min-w-[153px]'
        onClick={logout}
      >
        Logout
      </button>
      <div className='mt-4'>
        <button
          className='btn btn-primary p-3 my-4 hover:scale-[103%] transition-all duration-200 bg-transparent min-w-[153px]'
          onClick={deleteAccount}
        >
          Delete Account
        </button>
      </div>
      <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Update
        </p>
        <h2 className='py-4'>
          <small>Password</small>
        </h2>
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form onSubmit={handleUpdatePassword}>
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Password</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    ref={password}
                    maxLength={90}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    Confirm Password
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    ref={confirmPassword}
                    maxLength={90}
                  />
                </div>
              </div>

              <button
                className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'
                type='submit'
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withProtected(Admin);
