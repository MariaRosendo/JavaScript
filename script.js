$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Aluna da ", "Developer", "English teacher", "Social media", "Paid Traffic Manager"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Aluna da TOTI", "Developer", "English teacher", "Social media", "Paid Traffic Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresions = {
	nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	assunto: /^\d{9,14}$/,
}

function validar( ){
var NOME = document.getElementById("name").value; 
var email = document.getElementById("email").value; 
var text = document.getElementById("text").value; 
var textarea = document.getElementById("textarea").value; 

if (NOME == "")
{ document.getElementById("name").innerHTML = "o campo está vazio."; 
document.getElementById("name").innerHTML = ""; }

if (email == "")
{ document.getElementById("email").innerHTML = "o campo está vazio."; 
document.getElementById("email").innerHTML = ""; }

else if (text == "") 
{ document.getElementById("text").innerHTML = "";
 document.getElementById("text").innerHTML = "o campo está vazio."; 
} 

else if (textarea.length < 6) 
{ document.getElementById("textarea").innerHTML = "";
 document.getElementById("textarea").innerHTML = "Mensagem muito curta!"; 
}
  
 else { document.getElementById("name").innerHTML = "";
  document.getElementById("textarea").innerHTML = ""; 
  document.getElementById("msg").innerHTML = "Formulário validado!"; 
}		 
}