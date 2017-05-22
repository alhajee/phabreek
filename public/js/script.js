

var cart = document.getElementById("cart");
var cart2 = document.getElementById("cart2");
var viewCart = document.getElementById("cartButton");
var cancelCart = document.getElementById("xButton");
var viewCart2 = document.getElementById("cartButton2");
var cancelCart2 = document.getElementById("xButton2");


viewCart.onclick = OpenCart;
viewCart2.onclick = OpenCart2;
cancelCart.onclick = CloseCart;
cancelCart2.onclick = CloseCart2;

function OpenCart(){
    cart.style.display = "block";
    cart.style.transition = "2s";
    cart2.style.display = "block";
    cart2.style.transition = "2s";
}
function OpenCart2(){
    cart2.style.display = "block";
    cart2.style.transition = "2s";
}
function CloseCart(){
    cart.style.display = "none";
    cart.style.transition = "2s";
    cart2.style.display = "none";
    cart2.style.transition = "2s";
}
function CloseCart2(){
    cart2.style.display = "none";
    cart2.style.transition = "2s";
}

