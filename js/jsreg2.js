function validation(){
    if( document.getElementById('fname').value==''){
    document.getElementById('error').innerHTML="*Please Enter your First Name"
    return false
    
}
else if(document.getElementById('lname').value==''){
    document.getElementById('error1').innerHTML="*Please Enter your Last Name"
    return false
}
else if(document.getElementById('email').value==''){
    document.getElementById('error2').innerHTML="*Please Enter your Email"
    return false
}
else if(document.getElementById('selected').value==''){
    document.getElementById('error3').innerHTML="Please Select an Option"
    return false
}
else if(document.getElementById('suggestion').value==''){
    document.getElementById('error4').innerHTML="Please Enter your Suggestion"
    return false
}
else{
    document.getElementById('form1').submit();
    return true
}
}