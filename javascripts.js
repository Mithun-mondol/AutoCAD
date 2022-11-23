let openBtn = document.getElementById("openBtn");
// let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("modal");
let openToggleBar = false;

openBtn.addEventListener("click", function (event) {
  if (openToggleBar === false) {
    // modal.style.display = "flex";
    modal.style.left = "0px";
    // modal.style.opacity = "1";
    openBtn.innerHTML = `<i class="fas fa-window-close">`;
    openBtn.classList.add("close");
    // openBtn.addEventListener("mouseover", function (event) {
    // event.target.style.color = "#008c71";
    // event.target.style.background = "rgb(255, 114, 114)";
    // setTimeout(function () {
    //   event.target.style.color = "";
    //   event.target.style.background = "";
    // }, 500);
    // });
    openToggleBar = true;
  } else if (openToggleBar === true) {
    // modal.style.display = "none";
    modal.style.left = "-327px";
    // modal.style.opacity = "0";
    openBtn.innerHTML = `<i class="fas fa-bars">`;
    openBtn.classList.remove("close");
    openToggleBar = false;
  }
});

// closeBtn.addEventListener("click", function () {
//   //   modal.style.display = "none";
//   modal.style.left = "-275px";
//   modal.style.opacity = "0";
// });
