

var firebaseConfig = {
    apiKey: "AIzaSyB0vO_T2hF6WLazKPar0zmr7qhg3Mn2jwo",
    authDomain: "kwitterapp-d429d.firebaseapp.com",
    databaseURL: "https://kwitterapp-d429d-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-d429d",
    storageBucket: "kwitterapp-d429d.appspot.com",
    messagingSenderId: "929152798683",
    appId: "1:929152798683:web:5d99b4ed5531cd26e461fe",
    measurementId: "G-2S8MYKXNQ6"
  };
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
window.location = "index.html";
}