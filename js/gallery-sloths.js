window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery-sloths-grid-container img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});