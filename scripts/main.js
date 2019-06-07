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


//Showing more dresses by clicking moreBtn

let moreContent=document.querySelector(".more_content"),
    moreBtn=document.querySelector(".show_more");
moreBtn.addEventListener("click", function(){
    let btnText=moreBtn.textContent.toLowerCase();
    (btnText=="показать еще")?moreBtn.textContent="Скрыть":moreBtn.textContent="Показать еще";
    moreContent.classList.toggle("show");
    console.log(btnText);
});

//Hamburger button
let ham=document.querySelector(".hamburger"), sideMenu=document.querySelector(".side_menu");

ham.addEventListener("click", ()=>{
    ham.classList.toggle("is-active");
    sideMenu.classList.toggle("active");
});



                                       