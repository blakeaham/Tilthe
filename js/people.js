const nav = document.querySelector('#mainNav');
const kyle = document.querySelector('#kyle');
const cassie = document.querySelector('#cassie');
const blake = document.querySelector('#blake');
const coral = document.querySelector('#coral');
const andru = document.querySelector('#andru');
const jayde = document.querySelector('#jayde');

let allOfUs = [kyle, cassie, blake, coral, andru, jayde];


// Knuth Shuffle see https://github.com/coolaj86/knuth-shuffle
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
  
  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);
// Thanks Daplie!

shuffle(allOfUs);
allOfUs.forEach(person => nav.after(person));