

var cart = document.getElementById("cart");
var viewCart = document.getElementById("cartButton");
var cancelCart = document.getElementById("xButton");



viewCart.onclick = OpenCart;
cancelCart.onclick = CloseCart;

function OpenCart(){
    cart.style.display = "block";
    cart.style.transition = "2s";
}
function CloseCart(){
    cart.style.display = "none";
    cart.style.transition = "2s";
}