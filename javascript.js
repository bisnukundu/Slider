
let slide = document.querySelectorAll(".slide");
let nam = 0;
let btn = document.querySelector(".btn");
let img = document.getElementsByTagName("img")
let inc = -100

setInterval(() => {
    for (let i = 0; i < img.length; i++) {
        img[i].style.transform = `translateX(${inc}%)`
    }

    inc += -100
    let test = img.length * -100
    if (inc == test) {
        inc = -100
    }
}, 2000)
