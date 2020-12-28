const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".nav");
const sns = document.querySelector(".sns");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
