console.log('loaded');
const uname = document.getElementById("uname")
const pword = document.getElementById("pword")
const minfo = document.getElementById("memberInfo")




const verifyUser = () => {
	if (uname.value === "Blake" || "Coral" || "Kyle" || "Andru" || "Jayde" || "Cassie" && pword.value === "$ixidiot$"){
		minfo.innerHTML = "Meeting Wednesdays @ 6:30-7:30pm cst. 6:00-6:30 social hour<br>Do your homework!<br>Hunt airstreams<br>Help me get a good photo to use for you!";
	}
	else {
	 console.log('Bad login credentials'); }
}

// Execute a function when the user releases a key on the keyboard
pword.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    verifyUser();
  }
});

uname.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    verifyUser();
  }
});