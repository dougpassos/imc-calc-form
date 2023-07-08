const cardImcForm = document.querySelector('#card-imc-form');
const formImc = document.querySelector('#form-imc');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const errorAltura = document.querySelector('#error-altura');
const errorPeso = document.querySelector('#error-peso');
const cardResultBad = document.querySelector('#card-imc-result-bad');
const resultImc = document.querySelector('#result-imc');
const buttonResultOk = document.querySelector('#button-result-ok');

const changeHidden = (el) => {
  if(el.classList.contains("hidden")) {
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
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
  errorAltura.classList.add('hidden') 
  altura = altura.replace(/\D/g, '');
  if (altura.length  <= 3) {
    altura = altura.replace(/(\d{1})(\d{2})/,'$1.$2')
    inputAltura.value = altura;
  }
});

inputPeso.addEventListener('input', () => {
  errorPeso.classList.add('hidden')
  let peso = inputPeso.value;
  peso = peso.replace(/\D/g, '');
  if (peso.length  <= 5) {
    peso = peso.replace(/(\d{2})(\d{2})/,'$1.$2')
    inputPeso.value = peso;
  }
});

const validateInput = (el, elError) => {
  if (!inputFilled(el)) {
    elError.innerText = "campo vazio";
    elError.classList.remove('hidden')
    return false;    
  }
  return true;
}

const validadeAltura = () => {
  return validateInput(inputAltura, errorAltura);
}

const validadePeso = () => {
  return validateInput(inputPeso, errorPeso);
}

const changeScreen = () => {
  changeHidden(cardImcForm);
  changeHidden(cardResultBad);  
}

const calcImc = (peso, altura) => {
  let imc = (peso / (altura * altura))
  return imc;
}

formImc.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let altura = validadeAltura();
  let peso = validadePeso()
  if (altura && peso ) {
    imc = calcImc(Number(inputPeso.value), Number(inputAltura.value))
    resultImc.innerText = imc.toFixed(2)
    console.log(imc);
    changeScreen();    
  }
});

buttonResultOk.addEventListener("click", (evt) => {
  evt.preventDefault();
  changeScreen();
  inputAltura.value = "";
  inputAltura.focus();
  inputPeso.value = "";
})