
const form = document.querySelector('form')

const getName = document.querySelector('#name')

const getSurname = document.querySelector('#surname')

const getEmail = document.querySelector('#email')

const checkbox = document.querySelector('#check')

const submit = document.querySelector('#sub')


let names = getName.value;
    let surname = getSurname.value;
    let email = getEmail.value;
    let check = checkbox.value;

  


form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.target.reset();
   
 console.log({names,  surname,  email,  check})
});

    






    
   