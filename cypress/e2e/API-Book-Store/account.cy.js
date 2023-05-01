///<reference types="cypress" />

describe('Account API', () => {
    let userID;
    let token;
    let userName="danielfarias";
    let userpass="Az2528831040@";

    it('Post - Create user', () => {
        cy.request({
            method: 'POST',
            url: '/Account/v1/User',
            body: {
                userName: userName,
                password: userpass
            },
        }).then((response) => {
            expect(response.status).is.eq(201);
            userID=response.body.userID;
        });
    });

    it('Post - Generate Token', () => {
        cy.request({
            method: 'POST',
            url: '/Account/v1/GenerateToken',
            body: {
                userName: userName,
                password: userpass
            },
        }).then((response) => {
            expect(response.status).is.eq(200);
            token=response.body.token;
        });
    });

    it('Post - Authorized', () => {
        cy.log(token);
        cy.request({
            method: 'POST',
            url: '/Account/v1/Authorized',
            headers:{
                'Content-Type': 'application/json'
            },
            body: {
                userName: userName,
                password: userpass
            },
        }).then((response) => {
            expect(response.status).is.eq(200);
            expect(response.body).is.eq(true);
            
        });
    });

    it('Get - User', () => {
       cy.request({
        method: 'GET',
        url: `/Account/v1/User/${userID}`,
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
         .then((response) => {
          expect(response.status).to.have.eq(200);
          // assertion code here
       });
    });

    it('DELETE - User', () => {
        cy.request({
         method: 'DELETE',
         url: `/Account/v1/User/${userID}`,
         headers:{
             'Authorization':`Bearer ${token}`,
             'Content-Type': 'application/json'
         },
     })
          .then((response) => {
           expect(response.status).to.have.eq(204);
           // assertion code here
        });
     });
});