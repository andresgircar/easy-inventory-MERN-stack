/*Navbar background color onscroll function*/

const header = document.getElementById('HEADER');
const logo = document.getElementById('LOGO');
const navbar = document.querySelectorAll('.nav-option');

function headerScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(i = 0; i < navbar.length; i++){
        if(scrollTop >= 50){
            navbar[i].style.color = "var(--main-blue)";
        } else {
            navbar[i].style.color = "var(--sec-blue)";
        }
    }

    if (scrollTop >= 50){
        header.classList.add('header-bg')
        logo.classList.remove('normal-logo')
        logo.classList.add('scrolled-logo')
    } else {
        header.classList.remove('header-bg')
        logo.classList.remove('scrolled-logo')
        logo.classList.add('normal-logo')
    }
}

window.addEventListener('scroll', headerScroll);

/*Up to top button function */

let button = document.getElementById('upTo');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}