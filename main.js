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

	var selectedFile; 

	function getfile() 
	{ 
		var pic = document.getElementById("photo"); 

		// selected file is that file which user chosen by html form 
		selectedFile = pic.files[0]; 

		// make save button disabled for few seconds that has id='submit_link' 
		document.getElementById('submit_link').setAttribute('disabled', 'true'); 
		myfunction(); // call below written function 
	} 
	function myfunction() 
	{ 
		// select unique name for everytime when image uploaded 
		// Date.now() is function that give current timestamp 
		var name="123"+Date.now(); 

		// make ref to your firebase storage and select images folder 
		var storageRef = firebase.storage().ref('/images/'+ name); 

		// put file to firebase 
		var uploadTask = storageRef.put(selectedFile); 

		// all working for progress bar that in html 
		// to indicate image uploading... report 
		uploadTask.on('state_changed', function(snapshot){ 
			var progress = 
			(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
			var uploader = document.getElementById('uploader'); 
			uploader.value=progress; 
			switch (snapshot.state) { 
				case firebase.storage.TaskState.PAUSED: 
				console.log('Upload is paused'); 
				break; 
				case firebase.storage.TaskState.RUNNING: 
				console.log('Upload is running'); 
				break; 
			} 
		}, function(error) {console.log(error); 
		}, 
            function(){ 
                
document.getElementById('submit_link').removeAttribute('disabled'); 
			}); 
		 
	}; 

              
var firstURL = "test";

var selectedFile; 
	function getfilecover() 
	{ 
		var pic = document.getElementById("cover"); 

		// selected file is that file which user chosen by html form 
		selectedFile = pic.files[0]; 

		// make save button disabled for few seconds that has id='submit_link' 
		document.getElementById('submit_cover').setAttribute('disabled', 'true'); 
		myfunction(); // call below written function 
	} 
	function myfunction() 
	{ 
		// select unique name for everytime when image uploaded 
		// Date.now() is function that give current timestamp 
		var name="123"+Date.now(); 

		// make ref to your firebase storage and select images folder 
		var storageRef = firebase.storage().ref('/pdfcover/'+ name); 

		// put file to firebase 
		var uploadTask = storageRef.put(selectedFile); 

		// all working for progress bar that in html 
		// to indicate image uploading... report 
		uploadTask.on('state_changed', function(snapshot){ 
			var progress = 
			(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
			var uploader = document.getElementById('uploader'); 
			uploader.value=progress; 
			switch (snapshot.state) { 
				case firebase.storage.TaskState.PAUSED: 
				console.log('Upload is paused'); 
				break; 
				case firebase.storage.TaskState.RUNNING: 
				console.log('Upload is running'); 
				break; 
			} 
		}, function(error) {console.log(error); 
		}, function() { 

			// get the uploaded image url back 
			uploadTask.snapshot.ref.getDownloadURL().then( 
				function(downloadURL) { 

			// You get your url from here 
				console.log('File available at', downloadURL); 

			// print the image url 
			console.log(downloadURL);
               // var url = downloadURL; 
           // document.getElementById('uu').value = url;  
                 firstURL = downloadURL;

    document.getElementById('submit_cover').removeAttribute('disabled'); 
			}); 
		}); 
	}; 

console.log(firstURL);
 //var url = window.downloadURL;
 //document.getElementById("nuj").value = url;   

var ref =  firebase.database().ref('Test');
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
    
     var arr = []; 
        arr = snapshot.val();
     window.arrs;
    for(arrs in arr) {
        arrs = parseInt(arrs) 
        arrs += 1;
        console.log(arrs);
    }            

}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

 
// Reference messages collection
var messagesRef = firebase.database().ref('Test');

$('#contactForm').submit(function(e) {

    var newMessageRef = messagesRef;
    newMessageRef.child(arrs).set({ 
        
        bookpage: $('.book').val(),
        category: $('.cat').val(),
        categoryId: $('.catid').val(),
        description: $('.desc').val(),
        eBookMRP: $('.ebook').val(),
        eBooksave: $('.ebooksave').val(),
        eBookselling: $('.ebooksell').val(),
        emailId: $('.email').val(),
        isbn: $('.isbn').val(),
        language: $('.lang').val(),
        mrp: $('.mrp').val(),
        name: $('.name').val(),
        offer: $('.offer').val(),
        publisher: $('.publish').val(),
        rent12month: $('.rent12').val(),
        rent3month: $('.rent3').val(),
        rent6month: $('.rent6').val(),
        save: $('.save').val(),
        selling: $('.sell').val(),
        url: firstURL,
        writer: $('.writer').val()
    });
    
    $('.success-message').show();

    $('#contactForm')[0].reset();
});
