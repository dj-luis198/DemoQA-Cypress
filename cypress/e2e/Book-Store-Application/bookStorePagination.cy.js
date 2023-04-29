//https://www.youtube.com/watch?v=SaXZ7twSoqM&list=PLMZdod-kiMhKiRztQX_rng7EfcI5OteMR&index=30
//https://github.com/qaboxletstest/Cypress-Demo/

import { HomePage } from "../../support/pages/homePage";
import { BookStorePaginationPage } from "../../support/pages/bookStorePaginationPage";

describe('Book Store Pagination', () => {
    const homePage = new HomePage();
    const bookStorePaginationPage= new BookStorePaginationPage();

   beforeEach(() => {
       cy.visit('/');
       homePage.clickBookStore();
       bookStorePaginationPage.clickBookStoreButton();
       bookStorePaginationPage.selectRowsPerPage();

   });
   it('Pagination', () => {
       bookStorePaginationPage.findItem('Programming JavaScript Applications');
   });
});