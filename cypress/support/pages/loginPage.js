export class LoginPage {

  constructor() {
    this.url = '/login'
    this.userNameInput = '#userName'
    this.passwordInput = '#password'
    this.loginButton = '#login'
  }

  //NOTAS session: no se puede eliminar la cuenta y
  //luego de darla de alta otra vez al iniciar el test nuevamente porque da error
  //el verificar abre otra vez la pagina
  //el visit donde queremos ir una vez logeados debe estar fuera del session
  login(username, password) {
    const dataLogin = {
      url: this.url,
      nameInput: this.userNameInput,
      userName: username,
      passInput: this.passwordInput,
      userPass: password,
      loginBtn: this.loginButton
    }
    cy.loginGUI(dataLogin)
  }
}