const firebaseConfig = {
    apiKey: "AIzaSyCkOZu5vJyKgixw3VUQmvbpHHo_bppSL8E",
    authDomain: "c100-1bdd0.firebaseapp.com",
    databaseURL: "https://c100-1bdd0-default-rtdb.firebaseio.com",
    projectId: "c100-1bdd0",
    storageBucket: "c100-1bdd0.appspot.com",
    messagingSenderId: "910076117808",
    appId: "1:910076117808:web:4f0046507e4ee7c5967ef5"
  };
  firebase.initializeApp(firebaseConfig)
  
   var user_name=localStorage.getItem("user_name")
   document.getElementById("user_name").innerHTML=" Welcome " +user_name+" !"
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name", });
        localStorage.setItem("room_name", room_name);
  }
  function getData(){
        firebase.database().ref("/").on('value', function(snapshot) 
        {document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("room_Name - " +Room_names);
         row ="<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"<div></div>";
         document.getElementById("output").innerHTML += row;
        
        });});}
  getData();
  
  function redirectToRoomName(name){
  
   console.log(name);
   localStorage.setItem("room_name" ,name);
   window.location = "kwitter_page.html";
  }
  
  function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
        window.location = "kwitter.html";
  }