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
    document.body.classList.toggle("noscroll");
});
sideMenu.addEventListener("click", function(e){
if(e.target.className=="side_menu active"){
    sideMenu.classList.remove("active");
    ham.classList.remove("is-active");
    document.body.classList.remove("noscroll");
}
   

});
$(document).ready(function() {
    
    setTimeout(function(){
        let preloader=document.querySelector(".preloader");
        if(!preloader.classList.contains("done")){
            preloader.classList.add("done");
        }
    }, 1000)
    
   $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('html').animate( { scrollTop: destination }, 1100 );
     if($.browser.safari){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
   });
 });



                                       