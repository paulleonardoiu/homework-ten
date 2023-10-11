import {changePageContent} from './model/model.js';

function initListeners(){
    $("nav #links a").on("click", function(e){
        let btnId = e.currentTarget.id;
        changePageContent(btnId);
    });
}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
});

// Learn More Buttons
var homePromo = ".promos .promo-container a";
var toursPromo = ".tour .content a";
var bookNow = "#bookNowBtn";

// Read More Click
$(document).on("click", ".read-more", function(e){
    changePageContent("about");
})

// Home Promo Click
$(document).on("click", homePromo, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Tours Page Click
$(document).on("click", toursPromo, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
})

// Book Now Click
$(document).on("click", bookNow, function(e){
    let btnId = e.currentTarget.id;
    changePageContent("booking");
})