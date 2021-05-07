//This is where Firebase config will go
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyABlsoUPNB9ngZKXZKGzesVGQcl74mGwmA",
    authDomain: "chat-app-b1bcb.firebaseapp.com",
    databaseURL: "https://chat-app-b1bcb-default-rtdb.firebaseio.com",
    projectId: "chat-app-b1bcb",
    storageBucket: "chat-app-b1bcb.appspot.com",
    messagingSenderId: "1060008004734",
    appId: "1:1060008004734:web:ee660e25d2a4b2bc625c2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//All our variable declarations
let database = firebase.database();
let name = document.querySelector("#username");
let input = document.querySelector("#message");

//Code to PUSH data to the database
input.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
     database.ref("messages").push({
       name: name.value, 
       message: input.value
     })
   input.value="";
   }
 })

//Code to RETRIEVE data from the database
database.ref("messages").on('child_added', function(message) {
    let messages = document.querySelector("#messages");
    let name = message.val().name;
    let value = message.val().message;
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "@" + name;
    let p = document.createElement("p");
    p.innerHTML = value; 
    div.appendChild(span);
    div.appendChild(p);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; 
  })
