const showpass = () => {
    let showpass = document.getElementById('pass');
    let showpass2 = document.getElementById('pass2');
    if(pass.type==="password" || pass2.type === "password"){
        showpass.type = "text";
        showpass2.type = "text";
    }
    else{
        showpass.type = "password";
        showpass2.type = "password";
    }
}
const showbtn = (x) => x.classList.toggle("fa-eye-slash")