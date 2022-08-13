import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../utils/firebase';

function SignUp() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const { userName, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // const { createUser } = UserAuth();

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success('Account created successfully');
      router.push('/admin');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
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
                  <label className='uppercase text-sm py-2'>User Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    id='userName'
                    value={userName}
                    onChange={onChange}
                    maxLength={90}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    id='email'
                    value={email}
                    onChange={onChange}
                    maxLength={90}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Password</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='password'
                    id='password'
                    value={password}
                    onChange={onChange}
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
    </div>
  );
}

export default SignUp;
