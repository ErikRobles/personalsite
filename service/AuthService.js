import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
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
};
