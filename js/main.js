 
/*
$(document).ready(function () {
  'use strict';


/*when scroll body*/
  /*$(window).on('scroll', function () {

    var vc = $(this).scrollTop(); //scroll size
    if (vc >= 50) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });*/
  /*ACORDION*/
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panal = this.nextElementSibling;
    if (panal.style.display === "block") {
      panal.style.display = "none";
    } else {
      panal.style.display = "block";
    }
  });
};

window.onload = function () {
  "use strict";
  var txt1 = document.getElementById("txt1"),
      txt2 = document.getElementById("txt2"),
      txt3 = document.getElementById("txt3"),
      txt4 = document.getElementById("txt4"),
      txt5 = document.getElementById("txt5");
      txt1.style = "display:block";
      txt2.style = "display:none";
      txt3.style = "display:none";
      txt4.style = "display:none";
      txt5.style = "display:none";
}