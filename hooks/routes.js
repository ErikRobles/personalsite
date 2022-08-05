import { useRouter } from 'next/router';
import React from 'react';
import useAuth from './auth';

export function withPublic(PublicComponent) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();
    if (auth.user) {
      router.push('/');
      return (
        <div className='grid h-screen place-items-center'>
          <h1>Loading...</h1>
        </div>
      );
    }
    return <PublicComponent auth={auth} {...props} />;
  };
}

export function withProtected(ProtectedComponent) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();
    if (!auth.user) {
      router.push('/login');
      return (
        <div className='grid h-screen place-items-center'>
          <h1>Loading...</h1>
        </div>
      );
    }
    return <ProtectedComponent auth={auth} {...props} />;
  };
}