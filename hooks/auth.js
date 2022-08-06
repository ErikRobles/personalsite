import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthService } from '../service/AuthService';

const authContext = createContext({});

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const router = useRouter();

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? '');
  };
  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    if (email && password) {
      const { user, error } = await AuthService.createUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setError(error);
        toast.error(error);
        return;
      }
      setUser(user ?? null);
      router.push(`/verify?email=${email}`);
    } else {
      toast.success('Please enter email and password');
    }
  };

  const signInUserWithEmailAndPassword = async (email, password) => {
    if (email === '' || password === '') {
      toast.error('Please enter email and password');
      return;
    }
    if (email && password) {
      const { user, error } = await AuthService.signInUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setError(error);
        toast.error(error);
        return;
      }
      setUser(user ?? null);
      setError('');
      router.push('/');
    } else {
      toast.success('Signed In Successfully');
    }
  };

  const resetPassword = async (email) => {
    if (email) {
      const error = await AuthService.resetPassword(email);
      if (error) {
        setError(error);
        toast.error(error);
        return;
      }
      router.push(`/verify?email=${email}`);
      toast.success('Password reset email sent');
    } else {
      toast.error('Please enter email');
    }
  };

  const deleteAccount = async () => {
    const error = await AuthService.deleteAccount();
    setError(error);
    if (error) {
      toast.error(error);
      return;
    }
    router.push('/');
    toast.success('Account deleted');
  };

  const updatePassword = async (confirmPassword, password) => {
    if (confirmPassword === password) {
      const error = await AuthService.updatePassword(password);
      setError(error);
    } else {
      setError(error);
      toast.error('Passwords do not match');
    }
  };

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    setUser,
    createUserWithEmailAndPassword,
    signInUserWithEmailAndPassword,
    resetPassword,
    deleteAccount,
    updatePassword,
  };
  return <authContext.Provider value={value} {...props} />;
}
