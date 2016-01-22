/*
function showMyIP(content) {
	document.getElementById('ctx').innerHTML = content;
}

var script = document.createElement('script');
// script.src = 'https://services.sapo.pt/Codebits/listbadges?callback=insertReply';
script.src = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json?callback=showMyIP';
document.body.appendChild(script);
*/
/*
$.getJSON("https://services.sapo.pt/Codebits/listbadges?callback=insertReply", function(data) {
    // Get the element with id summary and set the inner text to the result.
    $('#ctx').text(data.result);
});

var arrBadge = [],
	arrCostas = [];

*/
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Action to be performed when the document is read;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
}

var xhttp = new XMLHttpRequest();
*/

/*
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://services.sapo.pt/Codebits/listbadges");
oReq.send();
*/

var x = new XMLHttpRequest();
x.open("POST", "https://services.sapo.pt/exceptions", true);
x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200)
  {
    var doc = x.responseXML;
    // …
    console.log(doc);
  }
};
x.send(null);


