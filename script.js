// creating button click show hide navbar
var togglebtn= document.querySelector(".togglebtn");
var nav= document.querySelector(".navlink");
var link = document.querySelector(".navlink li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open" )
})
