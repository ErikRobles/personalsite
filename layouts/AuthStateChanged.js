// import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import useAuth from '../hooks/auth';

const AuthStateChanged = ({ children }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className='grid h-screen place-items-center'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return children;
};

export default AuthStateChanged;
