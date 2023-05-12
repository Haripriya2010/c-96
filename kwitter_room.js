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

  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
 
  function addRoom(){
       room_name=document.getElementById("room_name").value ;
       firebase.database().ref("/").child(room_name).update({
            purpose:"adding a room name" 
       });
       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
 
  }
  function getData()
  {  
    firebase.database().ref("/").on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 getData();
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
 
 }
 
 function log_out(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
 }