// Get Button element from HTML
const btn = document.getElementById("btn");

// Function to generate an alert
function generateMessage() {
  alert("Hello, World!");
}
// Add event listener to the button
btn.addEventListener("click", generateMessage);
