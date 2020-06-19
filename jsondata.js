
var databaseRef = firebase.database().ref('yct/VendorSide/category');
//var tt ="";
//var childData =[];
//var childData;
var newList = new Array();

databaseRef.on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
        
var childKey = childSnapshot.key;
    newList.push(childSnapshot.val());
        //console.log(childData);
        
    // tt = childData; 
        //window.tt
// data.rows.forEach(e => newList.push(e.username));
  })
})

console.log(newList);
//console.log(tt);

//var select = document.getElementById("select");
//    
// //arr = ["SSC","JRF","FIIT","FRT","JEEMAIN","IIT"]; 
// 
//var arr = [];
//arr = newList;
//     
//for(var i=0;i<arr.length;i++)
//{
//    var option = document.createElement("OPTION"),
//    
//    txt = document.createTextNode(arr[i]);
//    
//    option.appendChild(txt);
//    option.setAttribute("value",arr[i]);
//    select.insertBefore(option,select.lastChild);
//}

let dropdown = $('#locality-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
dropdown.prop('selectedIndex', 0);

var url = [];
url = newList;
console.log(url[0]);

// Populate dropdown with list of provinces
//$.getJSON(url, function (data) {
  $.each(url, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
  })

//url = []
//
//console.log(url['0'])


//dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name)); Populate dropdown with list of provinces
  
// Populate dropdown with list of provinces
//
//  $.each(newList, function (key, entry) {
//    dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
//  })   
//  $.each(newList, function (key, value) {
//      //console.log(1);
//      console.log( key + ": " + value );
//    console.log(value);
//  });