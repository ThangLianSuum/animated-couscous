
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value = "";
}

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+name+"<img class='user_tick' src='https://external-preview.redd.it/A9Kme6x7dAoHZZ2Y6mg7KIAFMyJaZ0_o2brmjfAdoTk.jpg?auto=webp&s=b19dc5b45613af90e6b5b319d5d3ad45fcb06cd1'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button classs'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class = 'glyphicon qlyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("ouput").innerHTML += row;

    } });  }); }
getData();

function updateLike(message_id)
{
button_id = message_id
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});

}

function logout() {
    localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
window.location = "index.html";
}