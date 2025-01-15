// Function to toggle the left menu
function toggleMenu() {
  const leftMenu = document.getElementById("leftMenu");
  leftMenu.classList.toggle("collapsed");
}

// Function to shrink the page based on screen width
function shrinkPage() {
  const width = window.innerWidth;
  const container = document.querySelector(".container");

  if (width >= 992 && width <= 1600) {
    container.style.transform = "scale(0.9)";
  } else if (width >= 700 && width <= 767) {
    container.style.transform = "scale(0.8)";
  } else if (width >= 600 && width <= 700) {
    container.style.transform = "scale(0.75)";
  } else if (width <= 600) {
    container.style.transform = "scale(0.5)";
  } else {
    container.style.transform = "scale(1)";
  }
}

// Add event listener to call shrinkPage on window resize
window.addEventListener("resize", shrinkPage);

// Call shrinkPage on initial load
shrinkPage();
