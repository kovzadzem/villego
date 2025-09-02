// პატარა JS მობილური მენიუსთვის
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Footer-ში წლის ავტომატური განახლება
document.getElementById("year").textContent = new Date().getFullYear();
