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

// userRef = this.database.ref('yct/userProfile' + userId);
//    userRef.remove()

  firebase.database().ref('yct/userProfile' + userId).set({
    name: Name,
    email: Email,
    mobile: Mobile,
    password: Password,  
}, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
