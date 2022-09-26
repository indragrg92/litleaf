$(document).ready(function () { });

jQuery( document ).on( 'click', '.smooth-scroll', function( e ) {

   if (this.hash !== "") {
         // Prevent default anchor click behavior
         e.preventDefault();

         // Store hash
         var hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
} );