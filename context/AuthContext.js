import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  getAuth,
  deleteUser,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const UserContext = createContext();

// const user = auth.currentUser;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const router = useRouter();

  const createUser = async (userName, email, password) => {
    try {
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

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = async (email) => {
    try {
      if (!email) {
        toast.error('Please enter email');
        return;
      }
      await sendPasswordResetEmail(auth, email);
      router.push('/');
      toast.success('Password reset email sent');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const deleteAccount = async () => {
    try {
      await deleteUser(user);
      toast.success('Account deleted');
      router.push('/');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  const changePassword = async (password) => {
    try {
      await updatePassword(user, password);
      toast.success('Password updated');
      router.push('/');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        resetPassword,
        deleteAccount,
        updatePassword,
        changePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
