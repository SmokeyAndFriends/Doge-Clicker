function whenLoaded() {
    const doge = document.getElementById("#doge");
    const dogecoin = document.getElementById("#dogecoin");

    var dc = 0;

    doge.addEventListener("click", function() {
        dc += 1;
        dogecoin.innerHTML = dc + "Ð"
    });
};