const wrapper= document.querySelector(".wrapper");
const loginLink= document.querySelector(".login-link");
const registerLink= document.querySelector(".register-link");
const btnPopup= document.querySelector(".btnLogin-popup");
const iconClose= document.querySelector(".icon-close");

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

function logData(){
    var name=document.getElementById("username").value;
    var regemail=document.getElementById("email").value;
    var regpassword=document.getElementById("password").value;
    console.log(name,regemail,regpassword);
    var loginemail=document.getElementById("loginemail").value;
    var loginpassword=document.getElementById("loginpw").value;
    console.log(loginemail,loginpassword);
    if(regemail==loginemail && regpassword==loginpassword){
        alert("login successful");
    }
    else{
        alert("invalid email or password.Please try again!");
    }
}