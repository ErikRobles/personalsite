import firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from 'react-toastify';

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const user = await firebase.auth().signInWithPopup(provider);
      return user;
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
  createUserWithEmailAndPassword: async (email, password) => {
    try {
      const userCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await userCred.user.sendEmailVerification({
        url: 'http://erikrobles.xyz',
      });
      return {
        user: userCred.user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  signInUserWithEmailAndPassword: async (email, password) => {
    try {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      await userCred.user.sendEmailVerification({
        url: 'http://erikrobles.xyz',
      });
      return {
        user: userCred.user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  resetPassword: async (email) => {
    try {
      await firebase
        .auth()
        .sendPasswordResetEmail(email, { url: 'http://erikrobles.xyz/login' });
    } catch (error) {
      return error.message;
    }
  },
  deleteAccount: async () => {
    try {
      await firebase.auth().currentUser.delete();
    } catch (error) {
      return error.message;
    }
  },
  updatePassword: async (newPassword) => {
    try {
      await firebase.auth().currentUser.updatePassword(newPassword);
      return toast.success('Password updated successfully');
    } catch (error) {
      return error.message;
    }
  },
};
