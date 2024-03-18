import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const firebaseApp = initializeApp ({
    apiKey: "AIzaSyBoTZEf7LmpDA3KOAok8ZPcPHkQDADRNU0",
    authDomain: "fox-will-get.firebaseapp.com",
    databaseURL: "https://fox-will-get-default-rtdb.firebaseio.com",
    projectId: "fox-will-get",
    storageBucket: "fox-will-get.appspot.com",
    messagingSenderId: "45651837070",
    appId: "1:45651837070:web:d13e8d9df67322f0f149df",
    measurementId: "G-VSSVK52183"
});
const auth = getAuth(firebaseApp)


//Detect auth state

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('no user'
        )
    }
});
