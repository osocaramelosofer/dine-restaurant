let slider = document.querySelector('.slider__container')
let sliderItem = document.querySelectorAll('.slider__item')
let counter = 1
let width = sliderItem[0].clientWidth
let timeInterval = 5000

window.addEventListener("resize", function (){
    width = sliderItem[0].clientWidth
})

setInterval(function (){
    slides()
},timeInterval)

function slides() {
    slider.style.transform = `translate(${-width*counter}px)`
    slider.style.transition = "transform 1s ease"
    counter++

    if (counter === sliderItem.length){
        setTimeout(function (){
            slider.style.transform = "translate(0px)"
            slider.style.transition = "transform 0s"
            counter = 1
        },1500)
    }
}