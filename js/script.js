var link = document.querySelector(".search-wrapper");
var popup = document.querySelector(".search-hotel");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});

