const burgher = document.querySelector(".burgher");
const navBar = document.querySelector(".nav-bar");

// FUNCTIONS

function animateButton() {
  burgher.children[1].classList.toggle("move-left");
  burgher.children[0].classList.toggle("burgher-anim-top");
  burgher.children[2].classList.toggle("burgher-anim-bottom");
}

// EVENT LISTENERS

burgher.addEventListener("click", (e) => {
  // Toggle the vertical nav - bar
  navBar.classList.toggle("move-navBar");

  // Toggle the burgher animation
  animateButton();
});
