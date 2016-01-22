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

function click(id) {
		var el = document.getElementById(id);
		el.style.backgroundImage = "url('https://codebits.eu/imgs/b/2014/37_normal.png')";

		array

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);



function master() {
	arrayImg = [path, path, path];
	arrayPos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

	arrayImg.forEach(function(x) {
		for (var i=1; i<=2; i++) {
			id = shuffle(arrayPos).pop();
			x = document.getElementById(id).style.display="none";
		 }
		 )}
	}
}

