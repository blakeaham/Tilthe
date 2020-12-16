let nav = document.querySelector("#mainNav");
const topOfNav = nav.offsetTop;

function stick() {
  //    console.log(topOfNav, window.scrollY);
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
  //  nav.style.position = "sticky";
}

window.addEventListener("scroll", stick);
