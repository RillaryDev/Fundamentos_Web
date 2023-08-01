let name = document.querySelector('#name')
let email = document.querySelector('#email')

name.style.width = '20%'
email.style.width = '20%'


function validateName() {
    let txtName = document.querySelector('#txtName')
    if (name.value.length < 3) {
        txtName.innerHTML = 'Invalid Name'
        txtName.style.color = 'red'
    } else {
        txtName.innerHTML = 'Valid Name'
        txtName.style.color = 'green'
    }
}


function validateEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
        txtEmail.innerHTML = 'Invalid Email'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Valid Email'
        txtEmail.style.color = 'green'
    }
}

function submit(){
    if(nomeOk == true && emailOk == true){
        alert('Your registration has been completed successfully.')
    }else {
        alert('Fill in your information correctly before submitting.')
    }
}

