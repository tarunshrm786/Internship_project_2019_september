var firebaseConfig = {
    apiKey: "AIzaSyD03fGqw-DuHtd4gTCInilRpRgvEerPUoM",
    authDomain: "fir-connect-bdaab.firebaseapp.com",
    databaseURL: "https://fir-connect-bdaab.firebaseio.com",
    projectId: "fir-connect-bdaab",
    storageBucket: "fir-connect-bdaab.appspot.com",
    messagingSenderId: "647792241875",
    appId: "1:647792241875:web:3c7001eb805a549038b826",
    measurementId: "G-9B864KSCBN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
var tblUsers = document.getElementById('tbl_users_list');       
// Get a reference to the database service
var database = firebase.database();            
var databaseRef = database.ref('yct/RequestsOrder/');
var rowIndex = 1;            
//var user_name = document.getElementById('user_name').value;            
//var user_id = document.getElementById('user_id').value;       

databaseRef.once('value', function(snapshot){
    
      snapshot.forEach(function(childSnapshot){
         
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();  
      
        var row = tbl_users_list.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellIds = row.insertCell(2);
        var cellNames = row.insertCell(3);      
          
    cellId.appendChild(document.createTextNode(childKey));
    cellName.appendChild(document.createTextNode(childData.user_address));
    cellIds.appendChild(document.createTextNode(childData.user_total));
    cellNames.appendChild(document.createTextNode(childData.user_status));          
          rowIndex = rowIndex + 1;
      });
});