///////////////////////////
// NAVIGATION

$(document).ready(function() { // this closes the navigation menu wherever we click on the screen
    $(".nav-close").click(function() { // when click an element with .nav-close on it, run the following function...
        $("#nav-toggle").prop("checked", false); // take the element with ID="nav-toggle" (this is the checkbox) and change it's checked property to false (i.e. uncheck the box). Unchecking the box will have the effect of closing the nav
    });
});
