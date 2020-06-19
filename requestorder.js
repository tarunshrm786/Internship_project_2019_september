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
//
//var userId = firebase.auth().currentUser.uid;
//console.log(userId);

//return firebase.database().ref('yct/RequestsOrder' + userId).once('value').then(function(snapshot) {
//  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//  // ...
//    console.log(username);
//});

//var tbluser = document.getElementById('requestbook');

var rootRef = firebase.database().ref().child("yct/RequestsOrder/");
//var rootRef = firebase.database().ref('yct/RequestsOrder/1520599955');
//var rowIndex = 1;

//ref('yct/' + myUserId).orderByChild('RequestsOrder/');

//rootRef.limitToLast(1).on("child_added", snap => {
//    
//      var Landmark = snap.child("landmark").val();
//     console.log(Landmark);
//      var Total = snap.child("total").val();
//   // console.log(1);
//
//      var Status = snap.child("status").val();
//      var Phone = snap.child("phoneNumber").val();
//
//
//    $("#requestbook").append("<tr><td>" + Landmark + "</td><td>" + Total + "</td><td>"
//            + Status + "</td><td>" + Phone +  "</td> </tr>");
//});

rootRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
     // console.log(childData);
    
//var row = tbluser.insertRow(rowIndex);
//var cellId = row.insertCell(0);
//var cellName = row.insertCell(1);      
//cellId.appendChild(document.createTextNode(childKey));
//
//cellName.appendChild(document.createTextNode(childData.address));      
//      
//rowIndex = rowIndex+1;  
//
//  });
//});
      
     var Landmark = childSnapshot.child("landmark").val();
      console.log(Landmark);
      
    var Status = childSnapshot.child("status").val();
      //console.log(Status);
     
    var Total = childSnapshot.child("total").val();
      //console.log(Total);  
      
var Phone = childSnapshot.child("phoneNumber").val();
      console.log(Phone);      
    // var Landmark = childData.childKey("landmark").val();
     //console.log(Landmark);
     //var Total = childData.child("total").val();

      //var Status = childData.child("status").val();
      //var Phone = childData.child("phoneNumber").val();
      
      $("#requestbook").append("<tr><td>" + Landmark + "</td><td>" + Total + "</td><td>"
          + Status + "</td><td>" + Phone +  "</td> </tr>");
  });
});

//var ref =  firebase.database().ref('yct/RequestsOrder');
//// Attach an asynchronous callback to read the data at our posts reference
//ref.on("value", function(snapshot) {
//    
//     var arr = []; 
//        arr = snapshot.val();
//     window.arrs;
//    for(arrs in arr) {
//        arrs = parseInt(arrs) 
//        arrs += 1;
//        console.log(arrs);
//    }            
//
//}, function (errorObject) {
//  console.log("The read failed: " + errorObject.code);
//});
//console.log(arrs);