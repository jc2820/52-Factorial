//make an array of each of the 52 cards in a deck.
var deck = ['AH','KH','QH','JH','10H','9H','8H','7H','6H','5H','4H','3H','2H',
'AC','KC','QC','JC','10C','9C','8C','7C','6C','5C','4C','3C','2C',
'AS','KS','QS','JS','10S','9S','8S','7S','6S','5S','4S','3S','2S',
'AD','KD','QD','JD','10D','9D','8D','7D','6D','5D','4D','3D','2D'];

//Shuffle the order of the cards once.
var shuffle = deck.sort(function() {return .5 - Math.random();});
var shuffleStr = shuffle.join(' ').toString();
console.log(shuffleStr);
document.write('The first dealt hand is: ' + shuffleStr);
document.write('<br /><br />');
document.write('You can see this again later by checking the console.');
document.write('<br /><br />');
document.write('Click the shuffle button and the page will make a new draw every second.');
document.write('<br /><br />');
document.write('You might also want to zoom out so you can see the whole draw in one line.');
document.write('<br /><br />');

//Timed function variables
var timer = 1000; // time in milliseconds
var myInterval = 0;

// STARTS and Resets the loop
function startLoop() {
if(myInterval > 0) clearInterval(myInterval);  // stop
myInterval = setInterval( "fiftyTwoFactorial()", timer );  // run
}

function fiftyTwoFactorial() {
for (var i = 0; i < 1; i++) {
var toMatch = deck.sort(function() {return .5 - Math.random();});
var matchStr = toMatch.join(' ').toString();
if (matchStr !== shuffleStr) {document.write(matchStr + ': No Match :(');}
if (matchStr === shuffleStr) {document.write(matchStr + ': A Match!');}
if (matchStr === shuffleStr) {return matchStr + ': A Match at last!';}
document.write('<br /><br />');
}
}