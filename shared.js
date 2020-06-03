var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var CorruptionHotLine = document.querySelectorAll(".corruption__items");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
//console.dir(backdrop)
for (var i = 0; i < CorruptionHotLine.length; i++) {
  CorruptionHotLine[i].addEventListener("click", function () {
    if (modal) {
      modal.classList.add("open");
      backdrop.classList.add("open");
    }
  });
}

backdrop.addEventListener("click", function () {
  /*mobileNav.style.display = "none";*/
  mobileNav.classList.remove("open");
  CloseModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", CloseModal);
}

function CloseModal() {
  if (modal) {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
  }
}

toggleButton.addEventListener("click", function () {
  /*mobileNav.style.display = "block";
  backdrop.style.display = "block";*/
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
