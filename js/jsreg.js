function validate(){
    if( document.getElementById('fname').value==''){
        document.getElementById('error').innerHTML="*Please Enter your First name"
        
    }
    else if(document.getElementById('lname').value==''){
        document.getElementById('error1').innerHTML="*Please Enter your Last name"

    }
    else if(document.getElementById('email').value==''){
        document.getElementById('error2').innerHTML="*Please Enter your Emailid"

    }
    else if(document.getElementById('selected').value==''){
        document.getElementById('error3').innerHTML="*Please Select an option"

    }
    else if(document.getElementById('suggestion').value==''){
        document.getElementById('error4').innerHTML="*Please Enter your Suggestions"
    
    }
    else{
        document.getElementById('reg_form').submit();

    }
    }