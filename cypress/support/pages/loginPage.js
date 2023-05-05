export class LoginPage{

    constructor(){
        this.url='/login';
        this.userNameInput='#userName';
        this.passwordInput='#password';
        this.loginButton='#login';
    };

    //NOTAS session: no se puede eliminar la cuenta y 
    //luego de darla de alta otra vez al iniciar el test nuevamente porque da error
    //el verificar abre otra vez la pagina 
    //el visit donde queremos ir una vez logeados debe estar fuera del session
    loginUI(username,password){
        cy.session([username, password], () => {
            cy.visit(this.url)
            cy.gType(this.userNameInput,username);
            cy.gType(this.passwordInput,password);
            cy.gClick(this.loginButton);
            cy.url().should('contain', '/profile');
          });
    };
};