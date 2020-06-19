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

// Use this reference for code.
//https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot

//https://stackoverflow.com/questions/42824688/firebase-get-data-by-key-or-chid-values-javascript

var query = firebase.database().ref("yct/RequestsOrder").orderByKey();
query.once("value")

  .then(function(snapshot) {
    
    snapshot.forEach(function(childSnapshot) {
        
        // for key fetch
        var key = childSnapshot.key; 
        
        // for value fetch
        var value = childSnapshot.val();     

        // print value on console 
          console.log(key);
          console.log(value);
  });
});
 

//https://stackoverflow.com/questions/51073600/firebase-web-how-to-retrieve-nested-data-from-database-keeping-getting-back
// var ref = firebase.database().ref('yct/RequestsOrder');
//
//  var PrintData = document.getElementById('PrintOutData');
//
//  ref.on("value", function(snapshot) 
//  {
//    snapshot.forEach(function(childSnapshot) 
//    {
//      var childData = childSnapshot.val();
//      var id=childData.id;
//      console.log(childData);
//      ref.on('value', snap => PrintData.innerText = childData);
//    });
//  });
