// METHOD TO SHUFFLE ARRAY VALUES
Array.prototype.shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

// STARTS A COUNTER THAT ONLY STOPS WHEN ALL CARDS ARE FLIPPED
function startCounter() {
    var timer = document.getElementById('timer'),
        sec = 0;
    	timer.innerHTML = "Start!";

    var counter = setInterval(function() {
        if (flipped === arrayPairs.length) {
            return successMsg(sec);
        }
        sec++;
        timer.innerHTML = sec + "s";
        console.log(sec);
    }, 1000);
}

// GET BADGES DATA FROM REMOTE JSON WITH JSONP CALLBACK
var script = document.createElement('script');
script.src = 'https://codebits.eu/api/listbadges?callback=getData';
document.body.appendChild(script);

// SHUFFLE DATA FROM ALL BADGES AND BUILD CSS CLASSES FOR EACH LETTER WITH RESPECTIVE BADGE
function getData(n) {
    n.shuffle();
    for (var i = 65; i <= 73; i++) { // FROM UTF-8 UNICODE 'A' TO 'I'
        var indexLetter = String.fromCharCode(i);
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.' + indexLetter + ' { background: url("' + n[i].img + '") no-repeat !important;';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}

var arrayPairs = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I'],
    flippedCards = [],
    flippedIdx = [],
    flipped = 0;

// NEW GAME: SET FLIPPED CARDS BACK TO 0, SHUFFLE THE BADGES, 
// AND DISPLAY BOARD OF CARDS EQUAL TO THE LETTERS NUMBER
function newGame() {
    flipped = 0;
    arrayPairs.shuffle();
    document.getElementById('new').style.display = "none";
    document.getElementById('hide').style.display = "block";

    var output = '';
    for (var i = 0; i < arrayPairs.length; i++) {
        output += '<div id="tile_' + i + '" onclick="flipTile(this,\'' + arrayPairs[i] + '\')"></div>';
    }
    document.getElementById('ctx').innerHTML = output;
}

// START GAME: CHECK IF GAME IS ALREADY STARTED. IF NOT, SET gameStart TO true AND RUNS THE COUNTER
var gameStarted = false;
function startGame() {
    if (gameStarted === false) {
        gameStarted = true;
        startCounter();
    } else {
        return;
    }
}

// FLIP CARDS MECHANISM
function flipTile(el, att) {
    if (gameStarted === true) {
        if (el.className == "" && flippedCards.length < 2) { // CHECK IF ELEM HAS ANY CLASS AND IF THERE ARE CARDS TO FLIP
            el.className += att; // ADD CSS CLASS WITH RESPECTIVE LETTER/BADGE TO ELEMENT
            if (flippedCards.length == 0) { // IF 0 CARDS ARE FLIPPED
                flippedCards.push(att);
                flippedIdx.push(el.id);
            } else if (flippedCards.length == 1) { // IF 1 CARD IS FLIPPED
                flippedCards.push(att);
                flippedIdx.push(el.id);
                if (flippedCards[0] == flippedCards[1]) { // COMPARE 2 FLIPPED CARDS
                    flipped += 2;
                    // Clear both arrays
                    flippedCards = [];
                    flippedIdx = [];
                } else { 					// IF BADGES DON'T MATCH, flipBack()
                    function flipBack() {
                        // Flip the 2 tiles back over
                        var tile_1 = document.getElementById(flippedIdx[0]);
                        var tile_2 = document.getElementById(flippedIdx[1]);
                        tile_1.style.background = 'url(https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg) no-repeat';
                        tile_1.className = "";
                        tile_2.style.background = 'url(https://i2.wp.com/codebits.eu/logos/defaultavatar.jpg) no-repeat';
                        tile_2.className = "";
                        // Clear both arrays
                        flippedCards = [];
                        flippedIdx = [];
                    }
                    setTimeout(flipBack, 400);
                }
            }
        }
    } else {
        alert("O jogo ainda não começou. Feche esta janela e clique em INICIAR JOGO.");
    }
}

// SHOW SUCCESS MESSAGE WITH TWITTER SHARE LINK ON THE FOOTER
function successMsg(n) {
    x = document.getElementsByTagName('footer');
    if (x.innerHTML = '') {
        x[0].innerHTML = '<a href="https://twitter.com/intent/tweet/?text=Memory Javascript FTW em: ' + n + ' segundos!">Memory Javascript FTW em: ' + n + ' segundos! <br> Partilha com os teus amigos no <span>Twitter</span>!!</a>';
    } else {
        x[0].innerHTML = '';
        x[0].innerHTML = '<a href="https://twitter.com/intent/tweet/?text=Memory Javascript FTW em: ' + n + ' segundos!">Memory Javascript FTW em: ' + n + ' segundos! <br> Partilha com os teus amigos no <span>Twitter</span>!!</a>';
    }
}