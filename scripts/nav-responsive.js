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

const backImg=document.querySelector('.agents_models')

document.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log(value)
    if(value>2286 & value<3103){
        backImg.style.marginTop="-"+(value-2400)/3+'px'
    }
})
