const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const para = document.querySelectorAll(".para");

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function(){
        plus[i].classList.remove("visible");
        plus[i].classList.add("hidden");
    minus[i].classList.add("visible");
    para[i].classList.add("visible");
    });
}

for (let i = 0; i< plus.length; i++) {
    minus[i].addEventListener("click", function() {
        
        plus[i].classList.remove("hidden");
        plus[i].classList.add("visible");
        minus[i].classList.remove("visible");
        minus[i].classList.add("hidden");
        para[i].classList.remove("visible");
        para[i].classList.add("hidden");
    console.log(minus[i].classList)
    });

}