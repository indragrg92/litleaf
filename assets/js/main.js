jQuery(document).ready(function() {

   jQuery( '.navbar' ).on( 'click' , '.hamburger-menu', function (e) {

       e.preventDefault();

       if ( !jQuery( this ).hasClass( 'nav-open' ) ) {

           jQuery( '#navbarSupportedContent' ).removeClass( 'active' );
           jQuery( 'body' ).removeClass('menu-active');
           jQuery( this ).removeClass('nav-close').addClass('nav-open');

       } else {

           jQuery( '#navbarSupportedContent' ).addClass( 'active' );
           jQuery( 'body' ).addClass( 'menu-active' );
           jQuery( this ).removeClass( 'nav-open' ).addClass( 'nav-close' );

       }
   });

   jQuery( '.submenu-opener' ).on( 'click', function( e ) {
       e.preventDefault();

       if( !jQuery( this ).hasClass( 'closed' ) ) {
           jQuery( this ).addClass( 'closed' );
           jQuery( this ).next( 'ul.dropdown-menu' ).css( 'display', 'block' );
       }
       else {
           jQuery( this ).removeClass( 'closed' );
           jQuery( this ).next( 'ul.dropdown-menu' ).css( 'display', 'none' );   
       }
   } );


});

jQuery( document ).on( 'click', '.smooth-scroll', function( e ) {

   if (this.hash !== "") {
         // Prevent default anchor click behavior
      e.preventDefault();

      jQuery( '.hamburger-menu' ).removeClass('nav-close').addClass('nav-open');
      jQuery( '#navbarSupportedContent' ).removeClass( 'active' );
      jQuery( 'body' ).removeClass('menu-active');
      

         // Store hash
         var hash = this.hash;

         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
} );