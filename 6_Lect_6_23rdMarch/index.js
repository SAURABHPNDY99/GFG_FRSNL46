const firstName = document.querySelector('#fname');
const lastName = document.querySelector("#lname");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const message = document.querySelector('#para');

function getFirstName(event) {
    console.log(event.target.value);
}

function getLastName(event) {
    console.log(event.target.value);
}

function onSubmit(event){
    event.preventDefault();

    const fname = firstName.value;
    const lname = lastName.value;
    const text = `Hi ${fname} ${lname}, welcome to our website!`;

    message.innerText = text;
}

function onClear(event){
    firstName.value = '';
    lastName.value = '';
    message.innerText = '';

}

firstName.addEventListener('input', getFirstName);
lastName.addEventListener('input', getLastName);
submit.addEventListener('click', onSubmit);
clear.addEventListener('click', onClear);
