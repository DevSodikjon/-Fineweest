const modal_hover = document.querySelector(".modal_hover");
const addModal = document.querySelector(".add");
const closeBtn = document.getElementById("close");
// const modal_hover = document.querySelector(".modal_hover");

 addModal.addEventListener("click", () => {
  // e.preventDefault();

  modal_hover.classList.toggle("active");
  console.log("I am working")
});

// function add() {
//   if (modal_hover.contains("active")) {
//     modal_hover.classList.remove("active");
//   } else {
//     modal_hover.classList.add("active");
//   }
// }

// addModal.addEventListener("click", add());

closeBtn.addEventListener("click", () => {
  // e.preventDefault();

  modal_hover.classList.toggle("active");
  console.log("I am working")
});
