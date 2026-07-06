import { files } from "./content.js";

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalContent = document.getElementsByClassName("modal-content")[0];

export function openModal(contentId) {
  modal.style.cssText =
    "animation:slide-in .5s ease; animation-fill-mode: forwards;";
  modalContent.innerHTML = files.find((f) => f.id === contentId).content;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  modal.style.cssText =
    "animation:slide-out .5s ease; animation-fill-mode: backwards;";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
