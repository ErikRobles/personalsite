import React from 'react';
import { withProtected } from '../hooks/routes';

function Admin({ auth }) {
  const { logout } = auth;
  return (
    <div className='flex flex-col items-center my-30'>
      <h1 className='py-4 text-gray-600'>Admin</h1>
      <button className='btn btn-primary p-3 my-4' onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default withProtected(Admin);
