var openbtn=document.querySelector("#open-popup-btn");
var closebtn=document.querySelector(".popup-close-btn");
 let signup=document.getElementById("signup");
openbtn.addEventListener("click",function(){
    document.body.classList.add("popup-active")
});
closebtn.addEventListener("click",function(){
    document.body.classList.remove("popup-active")
});
let email=document.getElementById("email")
    let mobile=document.getElementById("mobile")
    let password=document.getElementById("password");

    let storeddata=JSON.parse(localStorage.getItem("account-data"))
    document.querySelector("form").addEventListener("submit",(e)=>{
      e.preventDefault();
      display(storeddata);
      function display(data){
       data.forEach((e,i)=>{
        if(email.value===e.Email  && password.value ===e.Password){
          document.getElementById("heading").innerText="Sign in Successful";
          alert("Login Sucessfull")
          window.location.href="./afterloginn.html"
        }
        else{
          document.getElementById("heading").innerText="Wrong Credentials";
          alert("Wrong Credentials")

        }
       })
      }

    })
    console.log(fpopup)
    document.getElementById("sign_up").addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(signup);
        document.body.classList.remove("popup-active")
            signup.style.display="block"
    })





    backbtn.document.addEventListener("click",(e)=>{
        e.preventDefault();
        signup.style.display="none";
        document.body.classList.add("popup-active")

console.log("hi")
      })