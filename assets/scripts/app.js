const burgher = document.querySelector(".burgher");
const navBar = document.querySelector(".nav-bar");
const mediaQuery = window.matchMedia("(min-width: 800px)");

// FUNCTIONS

function animateButton() {
  burgher.children[1].classList.toggle("move-left");
  burgher.children[0].classList.toggle("burgher-anim-top");
  burgher.children[2].classList.toggle("burgher-anim-bottom");
}

function handleChange(e) {
  if (e.matches) {
    navBar.classList.remove("move-navBar");
  }
}

// EVENT LISTENERS

mediaQuery.addListener(handleChange);

burgher.addEventListener("click", (e) => {
  // Toggle the vertical nav - bar
  navBar.classList.toggle("move-navBar");

  // Toggle the burgher animation
  animateButton();
});
