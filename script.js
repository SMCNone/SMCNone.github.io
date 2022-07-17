/* Javascript et jQuery */

/* data.json  */

$(document).ready(function(){

  $.getJSON("data.json",function(data){
    for(let i = 0; i < data.length; i++){
      // Stockage des objects dans les variables
      let photo = data[i].photo;
      let name = data[i].name;
      let abv = data[i].abv;
      let ibu = data[i].ibu;
      let description = data[i].description; 

      //élaboration des messages de sortie
      let m  = "<div>";
      m += "<img class='photoBeer' src=images_json/" + photo + " />";
      m += "<article class='descriptionBeer'>";
      m += "<h2>" + name + "</h2>";
      m += "<h3>" + abv + ", " +  ibu + "</h3>";
      m += "<p>" + description + "</p>";
      m += "</article>";
      m += "</div>";

      //Réaliser la sortie vers la page
      $("#beerType").append(m);
    }; // Fin de la boucle
  });
});

/* Validation JavaScript du formulaire */

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const subjectValue = subject.value.trim();

  if(nomeValue === '') {
      setError(nome, 'Campo obrigatório');
  } else {
      setSuccess(nome);
  }

  if(emailValue === '') {
      setError(email, 'Campo obrigatório');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Email Inválido');
  } else {
      setSuccess(email);
  }

  if(phoneValue === '') {
      setError(phone, 'Campo obrigatório');
  } else if (Number(phoneValue.length) < 9 ) {
      setError(phone, 'Número deve ter pelo menos 9 dígitos.')
  } else {
      setSuccess(phone);
  }

  if(subjectValue === '') {
    setError(subject, 'Campo obrigatório');
} else {
    setSuccess(subject);
}
};
/* Fin Validation JS Formulaire */



