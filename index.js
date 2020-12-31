const myfunc = () =>{
let firstName = document.getElementById('name').value;
let lastName = document.getElementById('lname').value;
let email = document.getElementById('email').value;

//dob--------
//let dob = document.getElementById('age').value;

if(firstName==null||firstName.length<=2||firstName.length>=20||firstName==!(NaN)){
    document.getElementById('nameError').style.display = "block";
    document.getElementById('nameError').style.margin = "auto";
    document.getElementById('nameError').innerHTML = "invalid name"
    document.getElementById('name').style.border = "groove #F32013 2px ";
    return false;
}
else{
    document.getElementById('name').style.border = "groove #42f54e 2px"
    document.getElementById('nameError').style.display = "none";
}
if(lastName==null||lastName.length<=2||lastName.length>=20||lastName==!(NaN)){
    document.getElementById('lnameError').style.display = "block";
    document.getElementById('lnameError').style.margin = "auto";
    document.getElementById('lnameError').innerHTML = "invalid name"
    document.getElementById('lname').style.border = "groove #F32013 2px ";
    return false;
}
else{
    document.getElementById('lname').style.border = "groove #42f54e 2px"
   document.getElementById('lnameError').style.display = "none";

}
if(email == ""){
    document.getElementById('emailError').style.display = "block";
    document.getElementById('emailError').style.margin = "auto";
    document.getElementById('emailError').innerHTML = "invalid email";
    document.getElementById('email').style.border = "groove #F32013 2px ";
    return false
}
else{
    document.getElementById('email').style.border = "groove #42f54e 2px ";
    document.getElementById('emailError').style.display = "none";

}
/*

dob validation

if(dob == null){
    document.getElementById('dobError').style.display = "block";
    document.getElementById('dobErro').style.margin = "auto";
    document.getElementById('dobError').innerHTML = "invalid email";
    document.getElementById('dob').style.border = "groove #F32013 2px ";
    return false
}
else{
    document.getElementById('dob').style.border = "groove #42f54e 2px ";
    document.getElementById('dobError').style.display = "none";

}*/

}
