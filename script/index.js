var menu = document.getElementById('mobile-nav');
var openbtn = document.getElementById('openbtn');
var closebtn = document.getElementById('closebtn');

openbtn.addEventListener("click" , function open() {
    console.log('OPENED');
    menu.style.display = "block";
})

closebtn.addEventListener("click" , function close() {
    console.log("CLOSED");
    menu.style.display = "none";
})