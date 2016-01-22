// GET DATA FROM JSON WITH JSONP CALLBACK
var script = document.createElement('script');
script.src = 'https://codebits.eu/api/listbadges?callback=getData';
document.body.appendChild(script);

function getData(n) {
	n.shuffle();
	for (var i = 65; i <= 73; i++) {
		var indexLetter = String.fromCharCode(i);
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.' + indexLetter + ' { background: url("' + n[i].img + '") no-repeat !important;';
		document.getElementsByTagName('head')[0].appendChild(style);
	}

}

// memory_array
var arrayPairs = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I'];
// memory_values
var arrayImg = [];
// memory_tile_ids
var arrayPos = [];
var tiles_flipped = 0;

Array.prototype.shuffle = function () {
	var i = this.length, j, temp;
	while (--i > 0) {
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}

function newBoard() {
	tiles_flipped = 0;
	var output = '';
	arrayPairs.shuffle();
	for (var i=0; i < arrayPairs.length; i++) {
		output += '<div id="tile_'+i+'" onclick="flipTile(this,\''+arrayPairs[i]+'\')"></div>';
	}

	document.getElementById('ctx').innerHTML = output;
}

function flipTile(tile,val){
	if(tile.className == "" && arrayImg.length < 2){
		tile.className += val;
		if(arrayImg.length == 0){
			arrayImg.push(val);
			arrayPos.push(tile.id);
		} else if(arrayImg.length == 1){
			arrayImg.push(val);
			arrayPos.push(tile.id);
			if(arrayImg[0] == arrayImg[1]){
				tiles_flipped += 2;
				// Clear both arrays
				arrayImg = [];
            	arrayPos = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == arrayPairs.length){
					alert("Board cleared! Generating new board!");
					document.getElementById('ctx').innerHTML = "";
					newBoard();
				}
			} else {
				function flipBack(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(arrayPos[0]);
				    var tile_2 = document.getElementById(arrayPos[1]);
				    tile_1.style.background = 'url(https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg) no-repeat';
            	    tile_1.className = "";
				    tile_2.style.background = 'url(https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg) no-repeat';
            	    tile_2.className = "";
				    // Clear both arrays
				    arrayImg = [];
            	    arrayPos = [];
				}
				setTimeout(flipBack, 700);
			}
		}
	}
}