let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    let noFirst = document.querySelector('#noFirst');
    let noLast = document.querySelector('#noLast');
    let noEmail = document.querySelector('#noEmail');
    let noPassword = document.querySelector('#noPassword');

    // Verificar First Name
    if (!firstName.value) {
        firstName.classList.add('wrong');
        noFirst.classList.remove('d-none');
    } else if (firstName.value) {
        firstName.classList.remove('wrong');
        noFirst.classList.add('d-none');
    }


    // Verificar Last Name
    if (!lastName.value) {
        lastName.classList.add('wrong');
        noLast.classList.remove('d-none');
    } else if (lastName.value) {
        lastName.classList.remove('wrong');
        noLast.classList.add('d-none');
    }


    // Fazer Regex para validação
    if (!email.value) {
        email.classList.add('wrong');
        noEmail.classList.remove('d-none');
    } else if (email.value) {
        email.classList.remove('wrong');
        noEmail.classList.add('d-none');
    }


    // Verificar password
    if (!password.value) {
        password.classList.add('wrong');
        noPassword.classList.remove('d-none');
    } else if (password.value) {
        password.classList.remove('wrong');
        noPassword.classList.add('d-none');
    }

    // Sucesso
    if ( (firstName.value) && (lastName.value) && (email.value) && (password.value) ) {
        dados = {
            FirstName : firstName.value,
            LastName : lastName.value,
            Email : email.value,
            Password : password.value,
        }
        // console.log(dados)
        alert(`Todos os Campos foram devidamente preenchidos\n` + JSON.stringify(dados));
    }

});