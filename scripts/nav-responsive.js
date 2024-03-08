const search = document.getElementById("search");
const close = document.getElementById("close");
const searchContainer = document.getElementById("searchBox");

const searchToggle = document.querySelectorAll(".nav_search-icon, .nav_search-close");

for (let i = 0; i < searchToggle.length; i++) {
  searchToggle[i].addEventListener("click", function () {
    search.classList.toggle("nav_search-text--toggle");
    close.classList.toggle("nav_search-close--toggle");
    searchContainer.classList.toggle("nav_search--toggle");
  });
}


