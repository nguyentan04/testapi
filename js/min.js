var TIME_OUT = 100;

function detectMobile() {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
      return true;
    } else {
      return false;
    }
}

window.onscroll = function() {
  setTimeout(function(){ reveal(); }, TIME_OUT);
}

reveal = function() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

$(document).ready(function(){

  $('#id-menu-mobile-open').click(function(){
    $('#id-menu-body').removeClass('hide');
  });

  $('#id-menu-mobile-close').click(function(){
    $('#id-menu-body').addClass('hide');
  });

  //scrol for buttion up
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('#btn-up').removeClass('hide');
  } else {
      $('#btn-up').addClass('hide');
  }

  $('#btn-up').click(function(){
    topFunction();
  })
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}