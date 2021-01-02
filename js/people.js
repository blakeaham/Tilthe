let startLocation = document.querySelector("#top-of-content");
const kyle = document.querySelector("#kyle");
const cassie = document.querySelector("#cassie");
const blake = document.querySelector("#blake");
const coral = document.querySelector("#coral");
const andru = document.querySelector("#andru");
const jayde = document.querySelector("#jayde");
const people = document.querySelectorAll(".person");
const peoplePix = document.querySelectorAll(".person img");

let allOfUs = [kyle, cassie, blake, coral, andru, jayde];

// Knuth Shuffle see https://github.com/coolaj86/knuth-shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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

// Thanks Daplie!

function rearrange() {
  allOfUs.forEach((person) => startLocation.after(person));
}
shuffle(allOfUs);
rearrange();

function coolFunction() {
  // console.log(this.firstElementChild.nextElementSibling.style.zindex);

  this.firstElementChild.nextElementSibling.style.zIndex = "1";
}

function coolFunction1() {
  console.log(this);
  this.src = `${this.dataset.hoverimg}`;
}

function coolerFunction() {
  // console.log(this.firstElementChild.nextElementSibling.dataset.srcimg);
  this.firstElementChild.nextElementSibling.style.zIndex = "-1";
  this.firstElementChild.nextElementSibling.src = `${this.firstElementChild.nextElementSibling.dataset.srcimg}`;
}

people.forEach((person) => {
  person.addEventListener("mouseover", coolFunction);
  person.addEventListener("mouseout", coolerFunction);
});

peoplePix.forEach((pic) => {
  pic.addEventListener("mouseover", coolFunction1);
});

const kylePic = document.getElementById("kyle-pic");
const images = ["kyle_bio_pic.jpg", "kyle_bio_pic1.jpg", "kyle_bio_pic2.jpg"];
let i = 0;
const renew = setInterval(function () {
  if (images.length == i) {
    i = 0;
  } else {
    kylePic.src = "img/kyle/" + images[i];
    i++;
  }
}, 6000);
