let loginForm = document.querySelector('.header .login-form');
let loginBtn = document.querySelector(' #login-btn ');
let navbar = document.querySelector(' .header .navbar ');
let menuBtn = document.querySelector(' #menu-btn ');
let header = document.querySelector(' .header ');

loginBtn.onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
};

menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
};

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    

    if(window.scrollY){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}