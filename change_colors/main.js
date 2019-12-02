var colorBtn1 = document.querySelector('.colorBtn1');
var bodyBcg = document.querySelector('body');
var hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var hexBtn = document.querySelector('.hexBtn');
var hex = document.querySelector('.hex');

var colors = ['yellow', 'red', 'blue', 'green'];

colorBtn1.addEventListener('click', changeColor);
hexBtn.addEventListener('click', getHex);

function changeColor () {
	let random = Math.floor(Math.random()*colors.length)
	bodyBcg.style.backgroundColor = colors[random];
}

function getHex () {
	let hexCol = '#';

	for (let i = 0; i<6; i++) {
		let random = Math.floor(Math.random()*hexNumbers.length);
		hexCol += hexNumbers[random];
	}
bodyBcg.style.backgroundColor = hexCol;
hex.innerHTML = hexCol;

}