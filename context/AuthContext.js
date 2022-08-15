import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  deleteUser,
  updatePassword,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
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

const UserContext = createContext();

const user = auth.currentUser;

const PROFILE_COLLECTION = 'users'; // name of the FS collection of user profile docs

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [profile, setProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authErrorMessage, setAuthErrorMessage] = useState();

  const router = useRouter();

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
    let unsubscribe = null;
    const listenToUserDoc = async (uid) => {
      try {
        let docRef = doc(db, PROFILE_COLLECTION, uid);
        unsubscribe = await onSnapshot(docRef, (docSnap) => {
          let profileData = docSnap.data();
          console.log('Got user profile:', profileData);
          if (!profileData) {
            setAuthErrorMessage(
              `No profile doc found in Firestore at: ${docRef.path}`
            );
          }
          setAuthLoading(true);
          setProfile(profileData);
          setAuthLoading(false);
        });
      } catch (ex) {
        console.error(`useEffect() failed with: ${ex.message}`);
        setAuthErrorMessage(ex.message);
      }
    };
    if (user?.uid) {
      listenToUserDoc(user.uid);

      return () => {
        unsubscribe && unsubscribe();
      };
    } else if (!user) {
      setAuthLoading(true);
      setProfile(null);
      setAuthErrorMessage(null);
    }
  }, [user, setProfile, db]);

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
        profile,
        authErrorMessage,
        authLoading,
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
