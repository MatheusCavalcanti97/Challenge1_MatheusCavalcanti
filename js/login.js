const btnSalvar = document.querySelector("#btnSalvar");
let meusRegistrosUsers = [];

btnSalvar.addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicado");
  const frmUser = document.querySelector("#formUser");
  const fName = frmUser.firstName.value;
  const lName = frmUser.lastName.value;
  const bDateUser = frmUser.birthDate.value;
  const countryUser = frmUser.countryUser.value;
  const cityUser = frmUser.cityUser.value;
  const emailUser = frmUser.emailUser.value;
  const passwordUser = frmUser.passwordUser.value;

  const loginUser = new Login(emailUser, passwordUser);
  const pessoa = new Pessoa(fName, lName, bDateUser, countryUser, cityUser, loginUser);
  meusRegistrosUsers.push(pessoa);
  console.log(meusRegistrosUsers);
})

/*function buttonAction() {
  const firstName = document.getElementById("#first-Name".value);
  const lastName = document.getElementById("#last-Name").value;
  const birthDate = document.getElementById("#birth-date").value;
  const country = document.getElementById("#country").value;
  const city = document.getElementById("#city").value;
  const email = document.getElementById("#email").value;
  const password = document.getElementById("#password").value;

  const login = new Login(email, password);
  const pessoa = new Pessoa(firstName, lastName, birthDate, country, city, login);
  meusRegistrosUsers.push(pessoa);
}
*/


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
