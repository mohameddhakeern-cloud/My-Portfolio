document.addEventListener("DOMContentLoaded", function () {

new Typed("#typing", {
    strings: [
        "Mohamed Dhakeer",
        "CSE Student",
        "Java Developer",
        "Web Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});


document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});

});
