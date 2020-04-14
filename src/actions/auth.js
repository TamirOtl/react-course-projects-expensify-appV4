import { firebase, googleAuthProvider } from '../firebase/firebase';


export const LogIn = (uid) => ({
  type: 'LogIn',
  uid
});
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
    
  };
};
export const LogOut = () => ({
  type: 'LogOut'
  
});
export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
    
  };
};