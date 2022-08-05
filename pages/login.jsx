import React from 'react';
import { withPublic } from '../hooks/routes';

function Login({ auth }) {
  const { user, loginWithGoogle, error } = auth;
  return (
    <>
      <div className='flex flex-col items-center my-30'>
        <h1 className='py-4 text-gray-600'>Login</h1>
        <button className='btn btn-primary p-3 my-4' onClick={loginWithGoogle}>
          Log In with Google
        </button>
        {error && <p className='text-red-500'>{error}</p>}
        <p className='p-2'>{user?.uid}</p>
      </div>
    </>
  );
}

export default withPublic(Login);
