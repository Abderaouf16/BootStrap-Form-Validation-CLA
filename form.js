const form = document.getElementById('form');
const username = document.getElementById('UserName-text');
const email = document.getElementById('Email-text');
const fullName= document.getElementById('name-text');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    genderCheck();
    workCheck()
    fileCheck()
});
  // if we have an error
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
// if we don't have an error
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
  // for a valid email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//  conditions
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const nameValue = fullName.value.trim()
    

    
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(nameValue === '') {
        setError(fullName, 'Name is required');
    } else {
        setSuccess(fullName);
    }}




    const genderCheck=()=>{
        const male = document.getElementById('gender-text-male')
        const female = document.getElementById('gender-text-female')
              
     if(male.checked==true){
        
     }else if (female.checked==true){
        
     }else{
        alert('Selecting a Gender is require')
     }
    }

    const workCheck=()=>{
        const work= document.getElementById('myswitch')

        if( work.checked==true){
              
        }else{
            alert('You should confirm your work availability')
        }
    }

    const fileCheck=()=>{
        const resume= document.getElementById('file')
        const filePath=resume.value
        const  allowedExtensions = /(\.pdf)$/i;
        if(  allowedExtensions.exec(filePath)){
            
        }else {
            alert('You should upload your resume with pdf');
            
        }
       
    }
    