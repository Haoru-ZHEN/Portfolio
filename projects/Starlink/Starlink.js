const signupBut = document.getElementById("signupBut");
const emailInput = document.getElementById("emailInput");

function validate(){
     if(emailInput.value == ""){
          console.log("dwdw")
          signupBut.style.backgroundColor = "hsla(0,0%,100%,.3)"
          signupBut.style.color = "hsla(0,0%,100%,.3)";
          signupBut.classList.remove('valid');

     }else{
          console.log("dwwdwdwe")
          signupBut.style.backgroundColor = "#fff"
          signupBut.style.color = "#000";
          signupBut.classList.add('valid');
     }
}


window.onload = function() {

     document.body.style.opacity = "1";
   }