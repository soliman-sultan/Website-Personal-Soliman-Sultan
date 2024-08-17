// let nav = document.querySelector('.navbar')
// window.onscroll = function () {
//     if (scrollY > 250) {
//         nav.style.backgroundColor = "red"
//     }else{
//         nav.style.backgroundColor = "black"
//     }
// }



let toTop = document.querySelector('.toTop')
let whatsapp = document.querySelector('.whatsapp')
toTop.onclick = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    if (scrollY > 100) {
        toTop.style.display = 'block'
        whatsapp.style.display = 'block'
    }else{
        toTop.style.display = 'none'
        whatsapp.style.display = 'none'
    }
}


// function myFunctionArabic() {
//     var element = document.body;
//     element.classList.toggle("arabic-language");
// }

// function myFunctionEnglish() {
//     var element = document.body;
//     element.classList.toggle("english-language");
// }





// let body = document.querySelector('body')
// let en = document.querySelector('.en')
// let ar = document.querySelector('.ar')


// en.onclick = function () {
//     body.style.direction = 'ltr'
// }

// ar.onclick = function () {
//     body.style.direction = 'rtl'
// }