import { useRouter } from 'next/router';
import React from 'react';
import Spinner from '../components/Spinner';
import useAuth from './auth';

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();
    if (auth.user) {
      router.push('/');
      return <Spinner />;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();
    if (!auth.user || !auth.user.emailVerified) {
      router.push('/login');
      return <Spinner />;
    }
    return <Component auth={auth} {...props} />;
  };
}
