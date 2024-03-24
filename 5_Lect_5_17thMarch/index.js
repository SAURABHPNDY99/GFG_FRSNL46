const name = document.querySelector('#name');
const age = document.querySelector('#age');

age.addEventListener('input', getAge);
name.addEventListener('input', getName);

function getName(event){
    console.log(event.target.value);
}

function getAge(event){
    console.log(event.target.value);
}