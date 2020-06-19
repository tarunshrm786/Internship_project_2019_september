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
var databaseRef = database.ref('users');
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
        cellId.appendChild(document.createTextNode(childKey));
          
         cellName.appendChild(document.createTextNode(childData.user_name));  
      
          rowIndex = rowIndex + 1;
      });
});



function Insert_User()
{
    var user_name = document.getElementById('user_name').value;
    var database = firebase.database(); 
    var uid = database.ref().child('users').push().key;            
    
    var data = {
        
        user_id: uid,
        user_name: user_name
    }
    var updates = {};
    updates['/users/' +uid] = data;
    firebase.database().ref().update(updates);
    
    alert("Insert Successfully.");
    //reload_page();
}
            

function Delete_User()
{
var user_id = document.getElementById('user_id').value;        
    
    firebase.database().ref().child('/users/' + user_id).remove();
    alert("User Successfully deleted.");
    //reload_page();
                
}
            

function Update_User()
{
 var user_name = document.getElementById('user_name').value;  
var user_id = document.getElementById('user_id').value;      
    
      var data = {
          user_id: user_id,
          user_name: user_name
      }          
      
      var updates = {};
    updates['/users/' + user_id] = data;
    firebase.database().ref().update(updates);
    
    alert("Update Successfully.");
}