import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC-KdG19jfnWJlliXurYLdpn55Ny6hDoF0",
  authDomain: "oniontaskdatabase-d92b0.firebaseapp.com",
  databaseURL: "https://oniontaskdatabase-d92b0-default-rtdb.firebaseio.com",
  projectId: "oniontaskdatabase-d92b0",
  storageBucket: "oniontaskdatabase-d92b0.appspot.com",
  messagingSenderId: "721047553866",
  appId: "1:721047553866:web:d8ca55954b1b7d8022e3b3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);