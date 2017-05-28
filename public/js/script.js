

$(".cart").hide();

$(".cartButtonImage").click(function(){
    $(".cart").display="block";
    $(".cart").show().slideDown("slow");
    $(".cart").transition="2s";

});

$(".xButton").click(function(){
    $(".cart").hide().slideUp("slow");
    $(".cart").display="none";
    $(".cart").transition="2s";

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



simpleCart({
    shippingQuantityRate: 3
});


simpleCart({
    shippingTotalRate: 0.1
});

simpleCart({
    shippingCustom: function(){
        if( simpleCart.quantity() > 20 ){
            return 0;
        } else {
            return 10;
        }
    }
});

simpleCart({
    checkout: {
        type: "SendForm" ,
        url: "http://example.com/your/custom/checkout/url" ,
        // http method for form, "POST" or "GET", default is "POST"
        method: "GET" ,
        // url to return to on successful checkout, default is null
        success: "success.html" ,
        // url to return to on cancelled checkout, default is null
        cancel: "cancel.html" ,
        // an option list of extra name/value pairs that can
        // be sent along with the checkout data
        extra_data: {
            storename: "Bob's cool plumbing store",
            cartid: "12321321"
        }
    }
});

simpleCart({
    cartColumns: [
        { attr: "name" , label: "" } ,
        {view:'image' , attr:'thumb', label: false},
        { attr: "price" , label: "", view: 'currency' } ,
        { view: "decrement" , label: false , text: "<img class='minusButton' src='images/buttons/minusButton.png'> " } ,
        { attr: "quantity" , label: "" } ,
        { view: "increment" , label: false , text: "<img class='plusButton' src='images/buttons/plusButton.png'> " } ,
        { attr: "total" , label: "" , view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false },
    ]
});

////$('.shipment').HTML.write(simpleCart.shipping());
////$('.grandTotal').HTML.write(simpleCart.grandTotal());
//$('span.shipment').append(simpleCart.shipping());
//
////document.getElementsByClassName('grandTotal').innerHTML = simpleCart.grandTotal() ;
//var gtot = $("<p></p>").text(simpleCart.grandTotal());
//
//$('span.grandTotal').append(gtot);






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