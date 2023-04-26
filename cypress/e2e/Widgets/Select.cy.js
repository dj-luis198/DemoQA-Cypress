///<reference types="cypress" />
const { faker } = require('@faker-js/faker');
import { HomePage } from "../../support/pages/homePage";
import { SelectPage } from "../../support/pages/selectPage";

describe('Select Menu', () => {
    const homePage = new HomePage();
    const selectPage = new SelectPage();

    let singleOp = faker.helpers.arrayElement(
        [
            { index: '0-0', value: 'Group 1, option 1' },
            { index: '0-1', value: 'Group 1, option 2' },
            { index: '1-0', value: 'Group 2, option 1' },
            { index: '1-1', value: 'Group 2, option 2' },
            { index: '2', value: 'A root option' },
            { index: '3', value: 'Another root option' }
        ]);

    beforeEach(() => {
        cy.visit('/');
        homePage.clickWidgetsCard();
        selectPage.clickSelectMenu();
    });

    it('Select Value (id and tabindex)', () => {
        selectPage.clickSelectInput();
        selectPage.returnMenuOptions().should('be.visible');
        selectPage.selectToOption(singleOp.index);
        selectPage.returnSingleValue().should('have.text', singleOp.value);
    });
});