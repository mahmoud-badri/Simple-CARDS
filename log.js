// register user

let name = document.querySelector('#user-name');
let userPassword = document.querySelector('#password');
let signIp = document.querySelector('#sign_in');


let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

signIp.addEventListener('click', function(e){
    e.preventDefault();
    if (name.value === "" || userPassword.value === ""){
    alert("Please Fill Data")
    }else{
        if ((getUser && getUser.trim() === name.value.trim()) && (getPassword && getPassword.trim() === userPassword.value.trim())){
            setTimeout(()=>{
                window.location = "index.html";
            }, 1500)
        }else{
            alert("you don't have account, Sign up please")
            setTimeout(()=>{
                window.location = "registration.html";
            }, 1500)
            
        }
    }
});