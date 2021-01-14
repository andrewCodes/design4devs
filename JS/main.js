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
// COPY TO CLIPBOARD BUTTON - there will be a better (DRY-er) way of doing this. To be revisited

function copyCodeI2() {
    //get the element containing text to be copied
    var copyText = document.getElementById("code-block__textarea--images-code2");

    //get the copy button
    var copyBtn = document.getElementById("code-block__copy-btn--images-code2");

    // When the user clicks on the copy button, copy the text and change button text to "Copied"
    copyBtn.onclick = function() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyBtn.innerHTML = "Copied";
        setTimeout(resetText, 2000);
        function resetText() {
            copyBtn.innerHTML = "Copy";
        }
    }
};

function copyCodeI3() {
    var copyText = document.getElementById("code-block__textarea--images-code3");
    var copyBtn = document.getElementById("code-block__copy-btn--images-code3");

    copyBtn.onclick = function() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyBtn.innerHTML = "Copied";
        setTimeout(resetText, 2000);
        function resetText() {
            copyBtn.innerHTML = "Copy";
        }
    }
};

function copyCodeI4() {
    var copyText = document.getElementById("code-block__textarea--images-code4");
    var copyBtn = document.getElementById("code-block__copy-btn--images-code4");

    copyBtn.onclick = function() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyBtn.innerHTML = "Copied";
        setTimeout(resetText, 2000);
        function resetText() {
            copyBtn.innerHTML = "Copy";
        }
    }
};

function copyCodeI5() {
    var copyText = document.getElementById("code-block__textarea--images-code5");
    var copyBtn = document.getElementById("code-block__copy-btn--images-code5");

    copyBtn.onclick = function() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        copyBtn.innerHTML = "Copied";
        setTimeout(resetText, 2000);
        function resetText() {
            copyBtn.innerHTML = "Copy";
        }
    }
};


///////////////////////////
// MODAL - there will be a better (DRY-er) way of doing this. To be revisited

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

function imagesModalEx3() {
    var modal = document.getElementById("images-modal-ex3");
    var btn = document.getElementById("images__ex3-btn");
    var span = document.getElementById("modal__close--images-ex3");

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

function imagesModalCode3() {
    var modal = document.getElementById("images-modal-code3");
    var btn = document.getElementById("images__code3-btn");
    var span = document.getElementById("modal__close--images-code3");

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

function imagesModalEx4() {
    var modal = document.getElementById("images-modal-ex4");
    var btn = document.getElementById("images__ex4-btn");
    var span = document.getElementById("modal__close--images-ex4");

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

function imagesModalCode4() {
    var modal = document.getElementById("images-modal-code4");
    var btn = document.getElementById("images__code4-btn");
    var span = document.getElementById("modal__close--images-code4");

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

function imagesModalEx5() {
    var modal = document.getElementById("images-modal-ex5");
    var btn = document.getElementById("images__ex5-btn");
    var span = document.getElementById("modal__close--images-ex5");

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

function imagesModalCode5() {
    var modal = document.getElementById("images-modal-code5");
    var btn = document.getElementById("images__code5-btn");
    var span = document.getElementById("modal__close--images-code5");

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

// Icons modals


function iconsModalEx1() {
    var modal = document.getElementById("icons-modal-ex1");
    var btn = document.getElementById("icons__ex1-btn");
    var span = document.getElementById("modal__close--icons-ex1");

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

function iconsModalEx2() {
    var modal = document.getElementById("icons-modal-ex2");
    var btn = document.getElementById("icons__ex2-btn");
    var span = document.getElementById("modal__close--icons-ex2");

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

function iconsModalEx3() {
    var modal = document.getElementById("icons-modal-ex3");
    var btn = document.getElementById("icons__ex3-btn");
    var span = document.getElementById("modal__close--icons-ex3");

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

function iconsModalEx4() {
    var modal = document.getElementById("icons-modal-ex4");
    var btn = document.getElementById("icons__ex4-btn");
    var span = document.getElementById("modal__close--icons-ex4");

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

// Spacing modals


function spacingModalEx1() {
    var modal = document.getElementById("spacing-modal-ex1");
    var btn = document.getElementById("spacing__ex1-btn");
    var span = document.getElementById("modal__close--spacing-ex1");

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

function spacingModalEx2() {
    var modal = document.getElementById("spacing-modal-ex2");
    var btn = document.getElementById("spacing__ex2-btn");
    var span = document.getElementById("modal__close--spacing-ex2");

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


// Inspiration modals


function inspirationModalEx1() {
    var modal = document.getElementById("inspiration-modal-ex1");
    var btn = document.getElementById("inspiration__ex1-btn");
    var span = document.getElementById("modal__close--inspiration-ex1");

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

function inspirationModalEx2() {
    var modal = document.getElementById("inspiration-modal-ex2");
    var btn = document.getElementById("inspiration__ex2-btn");
    var span = document.getElementById("modal__close--inspiration-ex2");

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

function inspirationModalEx3() {
    var modal = document.getElementById("inspiration-modal-ex3");
    var btn = document.getElementById("inspiration__ex3-btn");
    var span = document.getElementById("modal__close--inspiration-ex3");

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

// Conversion modals


function conversionModalEx1() {
    var modal = document.getElementById("conversion-modal-ex1");
    var btn = document.getElementById("conversion__ex1-btn");
    var span = document.getElementById("modal__close--conversion-ex1");

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

function conversionModalEx2() {
    var modal = document.getElementById("conversion-modal-ex2");
    var btn = document.getElementById("conversion__ex2-btn");
    var span = document.getElementById("modal__close--conversion-ex2");

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

function conversionModalEx3() {
    var modal = document.getElementById("conversion-modal-ex3");
    var btn = document.getElementById("conversion__ex3-btn");
    var span = document.getElementById("modal__close--conversion-ex3");

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

function conversionModalEx4() {
    var modal = document.getElementById("conversion-modal-ex4");
    var btn = document.getElementById("conversion__ex4-btn");
    var span = document.getElementById("modal__close--conversion-ex4");

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

function conversionModalEx5() {
    var modal = document.getElementById("conversion-modal-ex5");
    var btn = document.getElementById("conversion__ex5-btn");
    var span = document.getElementById("modal__close--conversion-ex5");

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

function conversionModalEx6() {
    var modal = document.getElementById("conversion-modal-ex6");
    var btn = document.getElementById("conversion__ex6-btn");
    var span = document.getElementById("modal__close--conversion-ex6");

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

function conversionModalEx7() {
    var modal = document.getElementById("conversion-modal-ex7");
    var btn = document.getElementById("conversion__ex7-btn");
    var span = document.getElementById("modal__close--conversion-ex7");

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

///////////////////////////////
/// COPYRIGHT YEAR AUTO-UPDATE

function copyrightYear() {
    document.querySelector('#copyright-year').innerText = new Date().getFullYear();
}
