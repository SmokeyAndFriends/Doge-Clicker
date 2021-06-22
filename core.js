function whenLoaded() {
    var doge = document.querySelector("#doge");
    var dogecoin = document.querySelector("#dogecoin");

    var dc = 0;

    doge.addEventListener("click", function() {
        dc += 1;
        dogecoin.innerHTML = dc + "Ð"
    });
};