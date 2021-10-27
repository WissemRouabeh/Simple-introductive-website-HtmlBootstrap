$(document).ready(function() {
 $('.js-scrollTo').click(function() { // Au clic sur un élément
 var page = $(this).attr('href'); // Page cible
 var speed = 750; // Durée de l'animation (en ms)
 $('html, body').animate( { scrollTop: $(page).offset().top-25}, speed ); // Go
 return false;
 });
});