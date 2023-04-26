export class SelectPage{

    constructor(){
        this.SelectMenu='Select Menu';
        this.selectInput='#withOptGroup';
        this.selectOption='Select Option';
        this.singleValue='div[class$=-singleValue]';
    };

    clickSelectMenu() {
        cy.contains('span[class="text"]',  this.SelectMenu).click();
    };

    clickSelectInput(){
        cy.contains( this.selectInput,this.selectOption).click();
    };

    returnMenuOptions(){
        return cy.get(this.selectInput).find('div[class$="-menu"]');
    };

    selectToOption(option){
        cy.get(`[id=react-select-2-option-${option}]`).click();
    };

    returnSingleValue(){
        return cy.get(this.singleValue);
    };
};