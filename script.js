console.log("hello");


document.addEventListener('DOMContentLoaded', function() {
const check = document.getElementById('check');
const navbar = document.getElementById('mynav-bar');

check.addEventListener("change", function(event) {
if (check.checked) {
navbar.style.left = "0%";
navbar.setAttribute('aria-hidden', 'false');
} else {
navbar.style.left = "-100%";
navbar.setAttribute('aria-hidden', 'true');
}
});

// Function to handle click events outside the navbar and checkbox
function handleClickOutside(event) {
if (!navbar.contains(event.target) && event.target !== check && event.target !== document.querySelector('label[for="check"]')) {
navbar.style.left = "-100%";
check.checked = false;
navbar.setAttribute('aria-hidden', 'true');
}
}

// Add click event listener
function addClickListener() {
document.addEventListener("click", handleClickOutside);
}

// Remove click event listener
function removeClickListener() {
document.removeEventListener("click", handleClickOutside);
}

// Function to check viewport width and add/remove event listener
function checkViewportWidth() {
if (window.innerWidth < 768) { // Using 768 instead of 767.98 for more flexibility
addClickListener(); // Add the click event listener
} else {
removeClickListener(); // Remove the click event listener
}
}

// Initial check of viewport width
checkViewportWidth();

// Add event listener for window resize to dynamically add/remove the listener
window.addEventListener('resize', checkViewportWidth);
});

