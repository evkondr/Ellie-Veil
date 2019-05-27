$('.bg-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: false
});

$('.modelwrap__img').slick({
    arrows: false,
    dots: true
});

let moreContent=document.querySelector(".more_content"),
    moreBtn=document.querySelector(".show_more");
moreBtn.addEventListener("click", function(){
    let btnText=moreBtn.textContent.toLowerCase();
    (btnText=="показать еще")?moreBtn.textContent="Скрыть":moreBtn.textContent="Показать еще";
    moreContent.classList.toggle("show");
    console.log(btnText);
})
                                       