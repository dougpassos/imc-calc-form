const cardImcForm = document.querySelector('#card-imc-form');
const formImc = document.querySelector('#form-imc');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const errorAltura = document.querySelector('#error-altura');
const cardResultBad = document.querySelector('#card-imc-result-bad');
const buttonResultOk = document.querySelector('#button-result-ok');

const changeHidden = (el) => {
  if(el.classList.contains("hidden")) {
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

const elementHidden = (el) => {
  el.classList.contains("hidden");
  console.log(el.classList);
}

const inputFilled = (el) => {
  console.log(el.value);
  if (el.value === "") {
    return false;
  }
  console.log("true");
  return true;
}

inputAltura.addEventListener('input', () => {
  let altura = inputAltura.value;  
  altura = altura.replace(/\D/g, '');
  if (altura.length  <= 3) {
    altura = altura.replace(/(\d{1})(\d{2})/,'$1,$2')
    inputAltura.value = altura;
  }
})

inputAltura.addEventListener('keydown', () => {
  console.log('change');
  if (elementHidden(errorAltura) === false) {
    console.log('change if');
    changeHidden(errorAltura);
  }

})


inputPeso.addEventListener('input', () => {
  let peso = inputPeso.value;
  peso = peso.replace(/\D/g, '');
  if (peso.length  <= 5) {
    peso = peso.replace(/(\d{2})(\d{2})/,'$1,$2')
    inputPeso.value = peso;
  }
})

const validateInput = (el, elError) => {
  if (!inputFilled(el)) {
    changeHidden(elError);    
    elError.innerText = "campo vazio";

    return false;    
  }
  return true;
}

const validadeAltura = () => {
  return validateInput(inputAltura, errorAltura);
}

const changeScreen = () => {
  changeHidden(cardImcForm);
  changeHidden(cardResultBad);  
}

formImc.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (validadeAltura()) {
    changeScreen();    
  }
});

buttonResultOk.addEventListener("click", (evt) => {
  evt.preventDefault();
  changeScreen();
})