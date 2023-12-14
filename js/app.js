let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let switchbtn = document.querySelector(".switch");



function button () {



    body.classList.toggle("darkmode")



    if(body.classList.contains("darkmode")){

        switchbtn.innerHTML = `<i class="bi bi-sun-fill"></i>`
        switchbtn.style.color= `yellow`

    } else{

        switchbtn.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`
        switchbtn.style.color= `black`
        ;


    }



}



btn.addEventListener("click", button);