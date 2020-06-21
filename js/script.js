var link = document.querySelector(".search-wrapper");
var popup = document.querySelector(".search-hotel");
var close = document.querySelector(".search-wrapper");
/*
link.onclick = function() {
    popup.classList.toggle()
}
*/
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
