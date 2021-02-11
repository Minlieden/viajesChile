$(function(){
  //smooth scrooling
  var vinculos = document.querySelectorAll("#navbarNav ul a");
  //definicion de variable
  for (var vinculo of vinculos) {
    vinculo.addEventListener("click", clickHandler);
  }//agregar evento clic a los vinculos
   
  function clickHandler(e) {
    e.preventDefault();
    var href = this.getAttribute("href");
   //variable que captura el valor de href
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });//agrega comportmaiento smooth cuando se dirige al href 
  }

});