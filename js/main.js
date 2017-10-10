// INVENTORY VIEW MODEL //
var itemsVM = new ItemsListViewModel();

function ItemsListViewModel(){

	// Treat yo self
    var self = this;

    self.test = "test";
}

/*
jQuery Mobile 
*/

// Define a click binding for all anchors in the page
$( "a" ).on( "click", function( event ) {

    // Prevent the usual navigation behavior
    event.preventDefault();

    // Alter the url according to the anchor's href attribute, and
    // store the data-foo attribute information with the url
    $.mobile.navigate( $(this).attr( "href" ), {
        foo: $(this).attr("data-foo")
    });
});

// AJAX Success!
// Fires everytime there's a successful ajax request completed. Useful to call functions that need to run on the newly rendered content.
$(document).ajaxSuccess(function() {
    
    // Navigate to the data-log page on longhold of header bar.
    $(function(){
        $( "header" ).bind( "taphold", tapholdHandler ).disableSelection();
        function tapholdHandler( event ){
            event.preventDefault();
            $.mobile.navigate("event-log.html", { transition: "flip"});
        }
    });

}); // END ajaxSuccess()