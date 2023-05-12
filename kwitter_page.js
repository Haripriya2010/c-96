const firebaseConfig = {
    apiKey: "AIzaSyA7zHwtB_4-s-_RtKJmuWOpYI1Uibqqx54",
    authDomain: "c-94-new.firebaseapp.com",
    databaseURL: "https://c-94-new-default-rtdb.firebaseio.com",
    projectId: "c-94-new",
    storageBucket: "c-94-new.appspot.com",
    messagingSenderId: "503801582090",
    appId: "1:503801582090:web:d2986d1cfdad205f2fc5f3",
    measurementId: "G-XCYW52057Y"
  };
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    } 