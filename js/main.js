/*global $, window, document*/
$(document).ready(function () {
  'use strict';

  $(".toggle-nav").click(function () {
    $(".nav-list").slideToggle();
  }); 
});




/*when scroll body*/
  $(window).scroll(function () {

    var vc = $(this).scrollTop(); //scroll size
    if (vc > 100) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });


  /*Start   Nice  Scroll*/

$("body").niceScroll({
  cursorcolor:"#6666FF",
  cursorwidth:"16px"
});

  /*End    Nice  Scroll*/


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
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}





