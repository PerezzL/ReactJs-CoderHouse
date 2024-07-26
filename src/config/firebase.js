// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWC3ihOKolUNrmOmwTmZW2rTT360LzW8",
  authDomain: "sportacusshop-coderhouse-859b6.firebaseapp.com",
  projectId: "sportacusshop-coderhouse-859b6",
  storageBucket: "sportacusshop-coderhouse-859b6.appspot.com",
  messagingSenderId: "147684169587",
  appId: "1:147684169587:web:c4587d922e2b97fc265706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// products.forEach((prod) => {
//     addDoc(collection(db, 'products'), prod)
//         .then((data) => console.log('el prod se cargo')
//     )  
//         .catch((error) => console.log(error));
// })