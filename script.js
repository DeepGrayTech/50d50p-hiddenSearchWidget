const searchbtn = document.getElementById("search-btn");
const inputwidth = document.getElementById("search");

searchbtn.addEventListener("click", function () {
  inputwidth.classList.toggle("active");
  console.log("clicked");
});
