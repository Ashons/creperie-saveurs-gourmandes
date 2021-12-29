/***********
*  STYLES  *
***********/

//Import sytles
import '../styles/base.scss';

/***************
*  JAVASCRIPT  *
***************/

//Loads the jquery package from node_modules
import $ from 'jquery';

//Launch when document is ready
/*
$(document).ready(function() {
    //alert("toto");
});
*/

// Reset all subMenu
function resetSubMenu(){
    $(".accountClick").hide();
    $(".productClick").hide();
    $("#subMenuOpen").hide();
    $("#product i").addClass("fa-angle-down");
    $("#product i").removeClass("fa-angle-up");
    $("#account i").addClass("fa-angle-down");
    $("#account i").removeClass("fa-angle-up");
}

// Change fontawesome onclick
function changeArrow(link){
    linkDirect = link.replace(".","#");
    if ($(link+"Click").css("display") == "block"){
        $(linkDirect+" i").addClass("fa-angle-down");
        $(linkDirect+" i").removeClass("fa-angle-up");
    } else {
        $(linkDirect+" i").addClass("fa-angle-up");
        $(linkDirect+" i").removeClass("fa-angle-down");
    }
}

// Display subMenu
$("nav#subMenu a").click(function(e){
    var link = $(this).attr("href");
    if(link.substr(0,1) == "#"){
        link = link.replace("#",".");
        if (link == ".account" && $(".productClick").css("display") == "block" || link == ".product" && $(".accountClick").css("display") == "block"){
            resetSubMenu();
        }
        $(link+"Click").toggle(changeArrow(link));
        $("#subMenuOpen").toggle();
        e.preventDefault();
    }
});

// Hide background click
$("#subMenuOpen").click(function(){
    resetSubMenu();
});

// Color basket > 0
function colorBasket(){
    var basket = parseInt($("#basket span").text());
    if (basket > 0){
        $("#basket span").css("background-color","#FFF161");
    }
}

function initMap() {
    var creperie = {lat: 47.8999005, lng: -4.0205828};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: creperie
    });
    var marker = new google.maps.Marker({
        position: creperie,
        map: map
    });
}

$(window).ready(function(){
    colorBasket();
    initMap();
});
$(window).resize(function(){
    //TODO
});