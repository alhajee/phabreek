

$(".cart").hide();

$(".cartButtonImage").click(function(){
    $(".cart").display="block";
    $(".cart").show().slideDown("slow");
    $("cart").transition="2s";

});

$(".xButton").click(function(){
    $(".cart").hide().slideUp("slow");
    $(".cart").display="none";
    $("cart").transition="2s";

});
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.topArrow').fadeIn();
        } else {
            $('.topArrow').fadeOut();
        }
    });

    $('.topArrow').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfd4pTPB-hCtSusPPIzaIf0ZywU2swhyo",
    authDomain: "phabreek.firebaseapp.com",
    databaseURL: "https://phabreek.firebaseio.com",
    projectId: "phabreek",
    storageBucket: "phabreek.appspot.com",
    messagingSenderId: "588022955695"
  };
  firebase.initializeApp(config);

//Implement Firebase Storage
var myFirebaseApp = "phabreek";
var myCart = new Firebase("https://" + myFirebaseApp + ".firebaseio.com/carts");

var saveCart = function () {

    //Get Values of User Cart from HTML

    myCart.push({
    "userid": userid,
    "item_id": item_id,
    "contact_details": contact_details 
    });
};

//Code to Call Function when window is loaded
window.load(function(){
    document.getElementById('cartForm').submit(saveCart);
});