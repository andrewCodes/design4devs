


const coloursPage = document.querySelector('.coloursPage');
const conversionPage = document.querySelector('.conversionPage');
const homePage = document.querySelector('.homePage');
const iconsPage = document.querySelector('.iconsPage');
const imagesPage = document.querySelector('.imagesPage');
const inspirationPage = document.querySelector('.inspirationPage');
const spacingPage = document.querySelector('.spacingPage');
const typographyPage = document.querySelector('.typographyPage');

///////////////////////////
// NAVIGATION

//this closes the navigation menu wherever user clicks on the screen

const navCloseBtn = document.querySelectorAll('.nav-close'); // select all elements with .nav-close class
const navToggle = document.querySelector('#nav-toggle'); // select nav-toggle checkbox

const closeNav = function () {
    navToggle.checked = false; // when closeNav is called, uncheck the nav-toggle checkbox
}
for (let i = 0; i < navCloseBtn.length; i++) // loop through all elements with nav-close class so can add the event handler to each
    navCloseBtn[i].addEventListener('click', closeNav); // when any element with .nav-close is clicked, call the closeNav function


///////////////////////////
// COPY TO CLIPBOARD BUTTON 

const copyCode = function (textID, btnID) {
    let copyText = document.getElementById(`${textID}`); // get the modal described in the argument
    let copyBtn = document.getElementById(`${btnID}`); // get the button to open the modal

    copyBtn.onclick = function () {
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

if (typeof (imagesPage) !== 'undefined' && imagesPage !== null) {
    copyCode('code-block__textarea--images-code2', 'code-block__copy-btn--images-code2');
    copyCode('code-block__textarea--images-code3', 'code-block__copy-btn--images-code3');
    copyCode('code-block__textarea--images-code4', 'code-block__copy-btn--images-code4');
    copyCode('code-block__textarea--images-code5', 'code-block__copy-btn--images-code5');
}



///////////////////////////
// MODALS
/* To work on...

const modalOpenBtn = document.querySelectorAll('.open-modal');
const modal = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelectorAll('.modal__close');
console.log(modal);

const openModal = function(){
    for (let i=0; 1<modal.length; i++)
    modal[i].style.display = "block"
}

const closeModal = function() {
    for (let i=0; 1<modal.length; i++)
    modal[i].style.display = "none";
}

for (let i=0; i<modal.length; i++) 
modalOpenBtn[i].addEventListener('click', openModal);

for (let i=0; i<modal.length; i++) 
modalCloseBtn[i].addEventListener('click', closeModal);
*/

const useModal = function (modalId, modalOpen, modalClose) {
    let modal = document.getElementById(`${modalId}`); // get the modal described in the argument
    let btn = document.getElementById(`${modalOpen}`); // get the button to open the modal
    let span = document.getElementById(`${modalClose}`); // get the element to close the modal
    btn.onclick = function () {
        modal.style.display = "block"; // switch modal display property to block when click the open button
    }
    span.onclick = function () {
        modal.style.display = "none";  // switch modal display property to none when click the close button
    }
    modal.onclick = function (event) { // switch modal display property to none when click the modal (outside modal image)
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

if (typeof (imagesPage) !== 'undefined' && imagesPage !== null) { // if the images element exists, do this...
    useModal('images-modal-ex1', 'images__ex1-btn', 'modal__close--images-ex1');
    useModal('images-modal-ex2', 'images__ex2-btn', 'modal__close--images-ex2');
    useModal('images-modal-code2', 'images__code2-btn', 'modal__close--images-code2');
    useModal('images-modal-ex3', 'images__ex3-btn', 'modal__close--images-ex3');
    useModal('images-modal-code3', 'images__code3-btn', 'modal__close--images-code3');
    useModal('images-modal-ex4', 'images__ex4-btn', 'modal__close--images-ex4');
    useModal('images-modal-code4', 'images__code4-btn', 'modal__close--images-code4');
    useModal('images-modal-ex5', 'images__ex5-btn', 'modal__close--images-ex5');
    useModal('images-modal-code5', 'images__code5-btn', 'modal__close--images-code5');
}

else if (typeof (iconsPage) !== 'undefined' && iconsPage !== null) {
    useModal('icons-modal-ex1', 'icons__ex1-btn', 'modal__close--icons-ex1');
    useModal('icons-modal-ex2', 'icons__ex2-btn', 'modal__close--icons-ex2');
    useModal('icons-modal-ex3', 'icons__ex3-btn', 'modal__close--icons-ex3');
    useModal('icons-modal-ex4', 'icons__ex4-btn', 'modal__close--icons-ex4');
}

else if (typeof (spacingPage) !== 'undefined' && spacingPage !== null){
    useModal('spacing-modal-ex1', 'spacing__ex1-btn', 'modal__close--spacing-ex1');
    useModal('spacing-modal-ex2', 'spacing__ex2-btn', 'modal__close--spacing-ex2');
}

else if (typeof (inspirationPage) !== 'undefined' && inspirationPage !== null) {
    useModal('inspiration-modal-ex1', 'inspiration__ex1-btn', 'modal__close--inspiration-ex1');
    useModal('inspiration-modal-ex2', 'inspiration__ex2-btn', 'modal__close--inspiration-ex2');
    useModal('inspiration-modal-ex3', 'inspiration__ex3-btn', 'modal__close--inspiration-ex3');
}

else if (typeof (conversionPage) !== 'undefined' && conversionPage !== null) {
    useModal('conversion-modal-ex1', 'conversion__ex1-btn', 'modal__close--conversion-ex1');
    useModal('conversion-modal-ex2', 'conversion__ex2-btn', 'modal__close--conversion-ex2');
    useModal('conversion-modal-ex3', 'conversion__ex3-btn', 'modal__close--conversion-ex3');
    useModal('conversion-modal-ex4', 'conversion__ex4-btn', 'modal__close--conversion-ex4');
    useModal('conversion-modal-ex5', 'conversion__ex5-btn', 'modal__close--conversion-ex5');
    useModal('conversion-modal-ex6', 'conversion__ex6-btn', 'modal__close--conversion-ex6');
    useModal('conversion-modal-ex7', 'conversion__ex7-btn', 'modal__close--conversion-ex7');
}


///////////////////////////////
/// COPYRIGHT YEAR AUTO-UPDATE

const copyrightYear = function () {
    document.querySelector('#copyright-year').innerText = new Date().getFullYear();
}
copyrightYear();

///////////////////////////////
// SMOOTH SCROLLING FOR GENERAL USE

$(document).ready(function () {
    // Add smooth scrolling to all links with smooth-scroll class
    $("a.smooth-scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        } // End if
    });
});

/* SCROLL TO TOP BUTTON */

$(document).ready(function (btt) {
    btbtn = document.getElementById("backToTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btbtn.style.display = "block";
        } else {
            btbtn.style.display = "none";
        }
    };
});



//////////////////////////////
// ACCESSIBILITY

/* required scripts...

1. change aria-checked state of nav checkbox
2. change aria-hidden on modal when open / closed
3. change aria-hidden on <main> when modal open / closed
4. move focus to modal when modal opened

function changeCheckbox(event) { // changes aria-checked state of nav checkbox
    var btn = document.getElementById("nav-toggle-label");
    let cbox = document.getElementById("nav-toggle");

    btn.onclick function() {
        switch(cbox.getAttribute("aria-checked")) {
            case "true":
                cbox.setAttribute("aria-checked", "false");
                break;
            case "false":
                cbox.setAttribute("aria-checked", "true");
                break;
        }
    };
}; */
