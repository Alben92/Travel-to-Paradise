// BOTONES SLIDE
$(document).ready(function() {

  $(".slide1").on("click", cambiarfondo1);
  function cambiarfondo1() {
    $("#home").css({"background-image": "url(./img/background/imagen-slide-3.jpg)", "transition": "all .3s ease-in-out", "background-position": "center",});
  };

  $(".slide2").on("click", cambiarfondo2);
  function cambiarfondo2() {
    $("#home").css({"background-image": "url(./img/background/imagen-slide-2.jpg)", "transition": "all .3s ease-in-out", "background-position": "right",});
    $(".slide1").removeClass("slide-active");
  };

  $(".slide3").on("click", cambiarfondo3);
  function cambiarfondo3() {
    $("#home").css({"background-image": "url(./img/background/imagen-slide-1.jpg)", "transition": "all .3s ease-in-out", "background-position": "left",});
    $(".slide1").removeClass("slide-active");
  };

});  

// MENU MODIFICABLE
var scroll;

$(window).scroll(function () {
  scroll = $(window).scrollTop();

    if(scroll > 800){
      $(".menu-web-lg").css({"top": "0"} );
    }else{
      $(".menu-web-lg").css({"top": "-200px"});
    }
});


// GALERIA
$(document).ready(function() {

  $(".slide2-negro").on("click", cambiargaleria1);
  function cambiargaleria1() {
    $(".imagen-table").css({"opacity": "0", "display": "none", "transition": "all .3s ease-in-out"});
    $(".imagen-table2").css({"opacity": "1", "display": "block", "transition": "all .3s ease-in-out"});
    $(".slide1-negro").removeClass("btn-slide-negro-active");
  };

  $(".slide1-negro").on("click", cambiargaleria2);
  function cambiargaleria2() {
    $(".imagen-table2").css({"opacity": "0", "display": "none", "transition": "all .3s ease-in-out"});
    $(".imagen-table").css({"opacity": "1", "display": "block", "transition": "all .3s ease-in-out"});
  };

});  



// MENU RESPONSIVE
$(document).ready(function () {

  $(".icon").on('click', activarfondo);
  function activarfondo() {
    $('.responsive').css({"display": "block",});
  };

  $(".icon-close").on('click', quitarmenu);
  function quitarmenu() {
    $('.responsive').css({"display": "none",});
  };

});

//Menu responsive modificable
var scrollmenu;

$(window).scroll(function () {
  scrollmenu = $(window).scrollTop();

    if(scroll > 200){
      $(".icon-movile-menu").css({"top": "0",} );
    }else{
      $(".icon-movile-menu").css({"top": "-80px"});
    }
});

// MODALES
$(document).ready(function(){
  //Leer mas Home
  $('#LeerMasHome').on('click', function() {
    $('#modalhome').css('display','block');
    $('#overlay').css('display','block');
  });

  $('.closeButton').on('click', function() {
    $('#modalhome').css('display','none');
    $('#ModalLouvre').css('display','none');
    $('#ModalInvalides').css('display','none');
    $('#ModalTorreEiffel').css('display','none');
    $('#ModalCliente').css('display','none');
    $('#ModalFidel').css('display','none');
    $('#ModalOnline').css('display','none');
    $('#overlay').css('display','none');
  });

  $('#saberMasLouvre').on('click', function() {
    $('#ModalLouvre').css('display','block');
    $('#overlay').css('display','block');
  });

  $('#saberMasInvalides').on('click', function() {
    $('#ModalInvalides').css('display','block');
    $('#overlay').css('display','block');
  });

  $('#saberMasEiffel').on('click', function() {
    $('#ModalTorreEiffel').css('display','block');
    $('#overlay').css('display','block');
  });

  $('#saberMasCliente').on('click', function() {
    $('#ModalCliente').css('display','block');
    $('#overlay').css('display','block');
  });

  $('#saberMasfidel').on('click', function() {
    $('#ModalFidel').css('display','block');
    $('#overlay').css('display','block');
  });

  $('#saberMasOnline').on('click', function() {
    $('#ModalOnline').css('display','block');
    $('#overlay').css('display','block');
  });

})
    