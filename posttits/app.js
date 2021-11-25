// Grab the post-it-board from the html
const container = document.querySelector(".post-it-board");
// Create an array with the three different colors and tilt classes
const postItColor = ["red-post-it", "blue-post-it", "yellow-post-it"];
// Id so we later can remove the post-it
let id = 0;
// Function to create a new post-it and give it a random color and a unique id
function addSticker() {
  let color = postItColor[Math.floor(Math.random() * postItColor.length)];
  container.innerHTML += `
  <div class="post-it ${color}" id="post-id-${id}">
    <img src="./images/remove.svg" height="20px" width="20px" class="remove" onclick="removeStickerOnClickFromId(this)">
    <div class="post-it-edit" contenteditable="true"></div>
  </div>
  `;
  // Increment the id so we can create a unique id for each post-it
  id++;
}
// Function to remove a post-it
function removeStickerOnClickFromId(el) {
  // Get the id of the post-it and remove it
  let element = document.getElementById(el.parentNode.id);
  element.remove();
  id--;
}
