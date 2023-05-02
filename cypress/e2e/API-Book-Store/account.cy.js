//https://ajv.js.org/guide/getting-started.html

///<reference types="cypress" />
const Ajv = require('ajv');
import { Schema } from "../../support/schemas/createPOST";
import { SchemaToken } from "../../support/schemas/tokenPOST";
import { SchemaUser } from "../../support/schemas/userGET";

describe('Account API', () => {
    const ajv = new Ajv();
    const schema = Schema;
    const schemaToken = SchemaToken;
    const schemaUser = SchemaUser;

    let userID;
    let token;
    let userName = "danielfarias6";
    let userpass = "Az2528831040@";

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
            const validate = ajv.compile(schema);
            const valid = validate(response.body);
            expect(valid,'schema valid?').to.be.true;
            userID = response.body.userID;
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
            const validate = ajv.compile(schemaToken);
            const valid = validate(response.body);
            expect(valid,'schema valid?').to.be.true;
            token = response.body.token;
        });
    });

    it('Post - Authorized', () => {
        cy.log(token);
        cy.request({
            method: 'POST',
            url: '/Account/v1/Authorized',
            headers: {
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
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                expect(response.status).to.have.eq(200);
                const validate = ajv.compile(schemaUser);
                const valid = validate(response.body);
                expect(valid,'schema valid?').to.be.true;
            });
    });

    it('DELETE - User', () => {
        cy.request({
            method: 'DELETE',
            url: `/Account/v1/User/${userID}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                expect(response.status).to.have.eq(204);
            });
    });
});