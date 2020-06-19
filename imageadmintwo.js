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
var fileUpload = document.getElementById('uploader');
var fileButton = document.getElementById('cover');


fileButton.addEventListener('change', function(e){
    
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('bannerimageadmin/' + file.name);
    
    var task = storageRef.put(file);
    
    task.on('state_changed', function progress(snapshot){
        
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
     uploader.value = percentage;    
    },
      function error(err)
            {
        
    },
    function complete(){
        
    }        
           
    );
});

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
function getfilecover() 
	{ 
		// select unique name for everytime when image uploaded 
		// Date.now() is function that give current timestamp 
		var name="123"+Date.now(); 

		// make ref to your firebase storage and select images folder 
		var storageRef = firebase.storage().ref('/banner/'+ name); 

		// put file to firebase 
		var uploadTask = storageRef.put(selectedFile); 

		// all working for progress bar that in html 
		// to indicate image uploading... report 
		uploadTask.on('state_changed', function(snapshot){ 
			var progress = 
			(snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
			var uploader = document.getElementById('uploader'); 
			uploader.value=progress; 
			switch (snapshot.state) 
            { 
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
                alert('Uploaded Successfully.');     
                    
                console.log(firstURL);    
                   
             		}); 
		}); 
	};
