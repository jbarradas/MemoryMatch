var script = document.createElement('script');
script.src = 'https://codebits.eu/api/listbadges?callback=getData';
document.body.appendChild(script);

function getData(n) {
	console.log(n);
}