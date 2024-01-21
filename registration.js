// register user

let userName = document.querySelector('#user-name-reges');
let email = document.querySelector('#email');
let password = document.querySelector('#password-regis');
let signUp = document.querySelector('#sign_up');

signUp.addEventListener('click', function(e){
  e.preventDefault();
  if (userName.value === "" || email.value === "" || password.value === ""){
    alert("Please Fill Data")
  }else{
    localStorage.setItem('username', userName.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)

    setTimeout(()=>{
      window.location = "index.html";
    }, 1500)
  }
  


})