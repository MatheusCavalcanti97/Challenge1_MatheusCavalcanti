const formUser = document.getElementById("formUser");
let meusRegistrosUsers = new Array();

function verificaNomes(a) {
  const apenasLetras = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s']+$/; //Permite que na String tenha Toda e Qualquer letra, com ou sem Assento.
  const wordValid = apenasLetras.test(a);
  return wordValid;
}

function verificaSenha(b) {
  const verificaSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; //No minimo 08 caracteres, pelos menos 1 letra, um numero e não permite caracter.
  const passwordValid = verificaSenha.test(b);
  return passwordValid;
}

function verificaData(c) {
  const validaDataNasc =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  const dateValid = validaDataNasc.test(c);
  return dateValid;
}

function verificaEmail(d) {
  const validaEmail = /\S+@\S+\.\S+/;
  const emailValid = validaEmail.test(d);
  return emailValid;
}

formUser.addEventListener("submit", (e) => {
  e.preventDefault();

  const fNameUser = document.getElementById("first-name").value;
  const lNameUser = document.getElementById("last-name").value;
  const bDateUser = document.getElementById("birth-date").value;
  const countryUser = document.getElementById("country").value;
  const cityUser = document.getElementById("city").value;
  const emailU = document.getElementById("email").value;
  const passwordUser = document.getElementById("password").value;
  const confirmationPasswordUser = document.getElementById("password-confirmation").value;

  const loginU = new Login(emailU, passwordUser);
  const pessoa = new Pessoa(fNameUser,lNameUser,bDateUser,countryUser,cityUser,loginU);

  if (verificaNomes(fNameUser) == true) {
    if (verificaNomes(lNameUser) == true) {
      if (verificaData(bDateUser) == true) {
        if (verificaNomes(cityUser) == true) {
          if (verificaEmail(emailU) == true) {
            if (verificaSenha(passwordUser) == true) {
              jaExisteUser(pessoa, confirmationPasswordUser);
            } else {
              console.log("senha deu errado!");
            }
          } else {
            console.log("deu errado 02");
          }
        } else {
          console.log("deu errado 03");
        }
      } else {
        console.log("deu errado 04");
      }
    } else {
      console.log("deu errado 05");
    }
  } else {
    console.log("deu errado 06");
  }

  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("birth-date").value = "";
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password-confirmation").value = "";
});

function jaExisteUser(pessoa, confirmationPasswordUser) {
  let vE = true;
  let vP = true;
  if (localStorage.hasOwnProperty("meusRegistrosUsers")) {
    meusRegistrosUsers = JSON.parse(localStorage.getItem("meusRegistrosUsers"));
  }

  if (meusRegistrosUsers.length == 0) {
    console.log("entrou aqui");
    meusRegistrosUsers.push(pessoa);localStorage.setItem("meusRegistrosUsers",JSON.stringify(meusRegistrosUsers));
  }

  if (meusRegistrosUsers.length != 0) {
    for(let i = 0; i < meusRegistrosUsers.length; i++){
      if(meusRegistrosUsers[i].login.email == pessoa.login.email){
        vE = true;
      } else{
        vE = false;
      }
    }
    if(pessoa.login.password == confirmationPasswordUser){
      vP = true;
    } else{
      vP = false;
    }

    if(vE ==  false && vP == true){
      meusRegistrosUsers.push(pessoa);
      localStorage.setItem("meusRegistrosUsers", JSON.stringify(meusRegistrosUsers));
    } else{
      console.log("NÃO ADICIONADO! USUARIO JÁ CADASTRADO!");
    }
  }

}

class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(newEmail) {
    return (this.email = newEmail);
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(password) {
    return (this.password = password);
  }
}

class Pessoa {
  constructor(firstName, lastName, birthDate, country, city, Login) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.country = country;
    this.city = city;
    this.login = Login;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(newFisrtName) {
    return (this.firstName = newFisrtName);
  }

  get getLastName() {
    return this.firstName;
  }

  set setLastName(newLastName) {
    return (this.lastName = newLastName);
  }

  get getBirthDate() {
    return this.birthDate;
  }

  set setBirthDate(newBirthDate) {
    return (this.birthDate = newBirthDate);
  }

  get getCountry() {
    return this.country;
  }

  set setCountry(newCountry) {
    return (this.country = newCountry);
  }

  get getCity() {
    return this.city;
  }

  set setCity(newCity) {
    return (this.city = newCity);
  }
}
