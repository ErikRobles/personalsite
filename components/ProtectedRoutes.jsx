import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { UserAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

function ProtectedRoutes({ children }) {
  const { user } = UserAuth();

  const router = useRouter();

  if (!user) {
    router.push('/');
  }
  return children;
}

export default ProtectedRoutes;
