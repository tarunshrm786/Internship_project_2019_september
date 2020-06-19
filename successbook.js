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


var database = firebase.database().ref().child('yct/successEbookPayment/QjcJg45uQcZEddJafpHTf5QPjIx1');

database.once('value', function(snapshot){

    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            
            var BookImageURL = data.val().bookImageUrl;
            var BookPdfUrl= data.val().bookPdfUrl;
            
            var Bookpage = data.val().bookpage;
            var EBookMRP= data.val().eBookMRP;
            
            var EBookSelling = data.val().eBookSelling;
            var Name= data.val().name;
            
            var OrderDateEbook = data.val().orderDateEbook;
            
            var Rentbook = data.val().rentBook;
            var Timeperiod = data.val().timePeriod;
        
            content += '<tr>';
          
            content += '<td>' + BookImageURL + '</td>'; //column1
            content += '<td>' + BookPdfUrl + '</td>';//column2 
            
            content += '<td>' + Bookpage + '</td>'; //column3
            content += '<td>' + EBookMRP + '</td>';//column4
            
            content += '<td>' +  EBookSelling + '</td>'; //column5
            content += '<td>' + Name + '</td>';//column6
            
            content += '<td>' + OrderDateEbook + '</td>'; //column7
            content += '<td>' + Rentbook + '</td>';//column8
            content += '<td>' + Timeperiod + '</td>';//column9
            
            content += '</tr>';
        });

        $('#ex-table').append(content);
    }
});


