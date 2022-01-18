// function writeUserData(){
//   alert('hi');
// }
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_T0hPRQGfi30G-TkyW_PSaq-MKZBI7n0",
  authDomain: "oneed-bf68a.firebaseapp.com",
  projectId: "oneed-bf68a",
  storageBucket: "oneed-bf68a.appspot.com",
  messagingSenderId: "650706632323",
  appId: "1:650706632323:web:fbaf0345cc40951d3665b6",
  measurementId: "G-3FJZ4EVCY1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



var userName = document.getElementById('name').value;
var instituteName = document.getElementById('instituteName').value;
var phoneNo = document.getElementById('phoneNo').value;
var yourRole = document.getElementById('option').value;

function callFunction(){
  writeUserData();
  return
}

  function writeUserData(userName, instituteName, phoneNo, yourRole) {
    firebase.database().ref('/users').set({
  
      user: userName,
      institute: instituteName,
      phone: phoneNo,
      role: yourRole
  
    });
  }
  

// function writeUserData(userName, instituteName, phoneNo, yourRole) {
//   firebase.database().ref('/users').set({

//     user: userName,
//     institute: instituteName,
//     phone: phoneNo,
//     role: yourRole

//   });
// }

