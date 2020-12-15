///////////////////////////
// NAVIGATION

// this closes the navigation menu wherever we click on the screen
$(document).ready(function() {
    $(".nav-close").click(function() { // when click an element with .nav-close on it, run the following function...
        $("#nav-toggle").prop("checked", false); // take the element with ID="nav-toggle" (this is the checkbox) and change it's checked property to false (i.e. uncheck the box). Unchecking the box will have the effect of closing the nav
    });
});

///////////////////////////
// EXPLAINER BUTTONS






///////////////////////////
// MODAL

// Images Modals

function imagesModalEx1() {
    // Get the modal
    var modal = document.getElementById("images-modal-ex1");

    // Get the button that opens the modal
    var btn = document.getElementById("images__ex1-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("modal__close--images-ex1");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function imagesModalEx2() {
    var modal = document.getElementById("images-modal-ex2");
    var btn = document.getElementById("images__ex2-btn");
    var span = document.getElementById("modal__close--images-ex2");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function imagesModalCode2() {
    var modal = document.getElementById("images-modal-code2");
    var btn = document.getElementById("images__code2-btn");
    var span = document.getElementById("modal__close--images-code2");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
