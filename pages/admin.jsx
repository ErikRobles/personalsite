import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../utils/firebase';
import Spinner from '../components/Spinner';

function Admin() {
  const {
    logout,
    deleteAccount,
    changePassword,
    getAuthUser,
    profile,
    authErrorMessage,
    authLoading,
  } = UserAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [siteUser, setSiteUser] = useState([]);

  const router = useRouter();

  const auth = getAuth();

  const user = auth.currentUser;

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    } else {
      changePassword(password);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      Cookies.remove('loggedIn');
      toast.success('Logout Successful');
      router.push('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  console.log(siteUser.role);

  const handleOpenUpdatePassword = () => {
    setIsOpen(true);
  };

  if (authLoading) {
    return <Spinner />;
  }

  return (
    <div className='flex flex-col items-center my-30 p-3'>
      <h1 className='py-4 text-gray-600'>Admin</h1>
      <p className='text-xl tracking-widest uppercase text-[#5651e5] text-center'>
        <strong>User Role: </strong>
        {profile && profile.role}
      </p>

      <p className='text-xl tracking-widest uppercase text-[#5651e5] text-center'>
        <strong>User Email: </strong>
        {user && user.email}
      </p>
      {user && user.displayName ? (
        <p className='text-xl tracking-widest uppercase text-[#5651e5] text-center'>
          <strong>User Name: </strong>
          {user.displayName}
        </p>
      ) : (
        ''
      )}
      <button
        className='btn btn-primary p-3 my-4 hover:scale-[103%] min-w-[153px]'
        onClick={handleLogout}
      >
        Logout
      </button>
      {profile && profile.role === 'admin' && (
        <div className='mt-4'>
          <button
            className='btn btn-primary p-3 my-4 hover:scale-[103%] transition-all duration-200 bg-transparent min-w-[153px]'
            onClick={deleteAccount}
          >
            Delete Account
          </button>
        </div>
      )}

      <div className='mt-4'>
        <button
          className='btn btn-primary p-3 my-4 hover:scale-[103%] transition-all duration-200 bg-transparent min-w-[153px]'
          onClick={handleOpenUpdatePassword}
        >
          Update Password
        </button>
      </div>
      {isOpen && (
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
                      onChange={(e) => setPassword(e.target.value)}
                      // ref={password}
                      maxLength={90}
                    />
                  </div>
                  <div className='flex flex-col '>
                    <label className='uppercase text-sm py-2'>
                      Confirm Password
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='password'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      // ref={confirmPassword}
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
                <button
                  className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-zinc-800 to-zinc-600 text-white'
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
