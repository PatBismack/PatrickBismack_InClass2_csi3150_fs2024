// Button element from HTML
const aButton = document.getElementById("a-btn");
const bButton = document.getElementById("b-btn");
const cButton = document.getElementById("c-btn");

// Root path for images
const imgPath = "../assets/image/";

// Add event listener to the Letter buttons
aButton.addEventListener("click", isClicked);
bButton.addEventListener("click", isClicked);
cButton.addEventListener("click", isClicked);

// Function to check if letter button is clicked
function isClicked(e) {
  if (e.target.id == "a-btn") {
    // Add Path to image and alt text
    const image = imgPath + "css-letter-a.png";
    const alt = "A is for aspect Ratio";
    // Set which div to display the result
    const resultDiv = document.getElementById("resultforA");
    // Give hide button an id
    const hideId = "hide-a-btn";
    createCard(image, alt, hideId, resultDiv);
    // Set up Hide Button Listener
    const hideABtn = document.getElementById("hide-a-btn");
    hideABtn.addEventListener("click", hideCard);
  } else if (e.target.id == "b-btn") {
    // Add Path to image and alt text
    const image = imgPath + "css-letter-b.png";
    const alt = "B is for border";
    // Set which div to display the result
    const resultDiv = document.getElementById("resultforB");
    // Give hide button an id
    const hideId = "hide-b-btn";
    createCard(image, alt, hideId, resultDiv);
    // Set up Hide Button Listener
    const hideBBtn = document.getElementById("hide-b-btn");
    hideBBtn.addEventListener("click", hideCard);
  } else if (e.target.id == "c-btn") {
    // Add Path to image and alt text
    const image = imgPath + "css-letter-c.png";
    const alt = "C is for colors";
    // Set which div to display the result
    const resultDiv = document.getElementById("resultforC");
    // Give hide button an id
    const hideId = "hide-c-btn";
    createCard(image, alt, hideId, resultDiv);
    // Set up Hide Button
    const hideCBtn = document.getElementById("hide-c-btn");
    hideCBtn.addEventListener("click", hideCard);
  }
}

// Create card based on the letter clicked
function createCard(image, alt, hideId, resultDiv) {
  resultDiv.innerHTML = `
        <div class="card">
      <img src="${image}" alt="${alt}">
      <button id="${hideId}" class="btn">Hide Result</button>
    </div>
    `;
}

// Hide card Function based on which letter the card belongs too
function hideCard(e) {
  if (e.target.id == "hide-a-btn") {
    const card = document.querySelector("#resultforA .card");
    card.innerHTML = "";
  } else if (e.target.id == "hide-b-btn") {
    const card = document.querySelector("#resultforB .card");
    card.innerHTML = "";
  } else if (e.target.id == "hide-c-btn") {
    const card = document.querySelector("#resultforC .card");
    card.innerHTML = "";
  }
}
