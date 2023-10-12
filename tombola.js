const createNumber = function (numb) {
  const num = document.getElementById("tombola");

  for (let i = 0; i < 76; i++) {
    const numeroDiv = document.createElement("div");
    numeroDiv.classList.add("numero");

    const numeroContent = document.createElement("h3");
    numeroContent.innerText = Math.floor(Math.random() * 10);
    numeroDiv.appendChild(numeroContent);
    num.appendChild(numeroDiv);
  }
};
window.addEventListener("DOMContentLoaded", () => {
  createNumber();
});
