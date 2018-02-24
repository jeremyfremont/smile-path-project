console.log('our JS file loaded!');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBqnT0jKCufdf05RTmZdg1TxRwm5QJ407U",
    authDomain: "smile-path-project.firebaseapp.com",
    databaseURL: "https://smile-path-project.firebaseio.com",
    projectId: "smile-path-project",
    storageBucket: "",
    messagingSenderId: "939884443169"
  };
  firebase.initializeApp(config);


// Create instance of Firebase's GitHub Authentication provider object
let githubAuth = new firebase.auth.GithubAuthProvider();

///////////////////////////////////////////////////////////


let firebaseGreetElem = document.getElementById("firebase-greeting");
console.log(firebaseGreetElem);


// Week 6 Firebase Challenges

let userLogin = document.getElementById("login");
console.log("user Login", userLogin);

let userLogout = document.getElementById("logout");
console.log("user Logout", userLogout);


userLogin.addEventListener("click", loginClick);

function loginClick() {
  firebase.auth().signInWithPopup(githubAuth).catch(function(error) {
  // Log any errors to the console
  console.log(error);
})
.then(function(){
    let userRef = firebase.database().ref("user/userID");
  }
}


userLogout.addEventListener("click", logoutClick);

function logoutClick() {
  firebase.auth().signOut().catch(function(error) {
  // Log any errors to the console
  console.log(error);
});
}

// When user logs in or logs out:
firebase.auth().onAuthStateChanged(handleAuthStateChange);

// may have to adjust later firebase db connection to place variable in the global scope
function handleAuthStateChange(user) {
  let database = firebase.database();
}

// Save data to the current local store
localStorage.setItem("username", "John");

// Access some stored data
alert( "username = " + localStorage.getItem("username"));


/*
// Week 5 - Create a database reference object for the location in our database with the path "greeting"
let dbGreetingRef = firebase.database().ref("greeting");
console.log(dbGreetingRef)

// Set up the Firebase event listener on our database reference object
// Any time the "value" event is triggered (when the page loads or when the data changes),
// then our code will run the function named displayFirebaseGreeting
dbGreetingRef.on("value", displayFirebaseGreeting);

// Define the function named displayFirebaseGreeting,
function displayFirebaseGreeting(dataSnapshot) {
  firebaseGreetElem.textContent = dataSnapshot.val();
console.log("It works")
}
*/
