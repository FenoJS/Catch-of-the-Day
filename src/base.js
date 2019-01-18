import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDa9FH_8-W8oeOmNwFYYZPG3zvsn9djA2E',
  authDomain: 'cath-of-the-day-app-1337.firebaseapp.com',
  databaseURL: 'https://cath-of-the-day-app-1337.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;