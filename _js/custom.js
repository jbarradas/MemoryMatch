
function click(id) {
    var el = document.getElementById(id);
    el.style.backgroundImage = "url('https://codebits.eu/imgs/b/2014/37_normal.png')";

}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

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