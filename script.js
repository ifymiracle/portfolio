// // creating button click show hide navbar
// // var togglebtn= document.querySelector(".togglebtn");
// // var nav= document.querySelector(".navlink");
// // // var link = document.querySelector(".navlink ");

// // togglebtn.addEventListener("click", function(){
// //     nav.classList.toggle("open" )
// //     this.classList.toggle("click");
   
// })

let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlink");


togglebtn.onclick = function(){
    togglebtn.classList.toggle("click");
    nav.classList.toggle("open");
}





 document.onclick = function(e){
    if (!togglebtn.contains(e.target) && !nav.contains(e.target) ) {
        togglebtn.classList.remove("click");
        nav.classList.remove("open");
    }
}