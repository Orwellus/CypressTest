//This is spec file, inside your google-search.spec.ts
import { isTypedArray } from 'cypress/types/lodash';


describe('Ohmydev Test', () => {
    it('Correct registration data', () =>{
        cy.visit("www.ohmydev.pl/register")
        cy.get('.jss96 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('#email').type("jankowalskitestowy@gmail.com")
        cy.get('#username').type("jankowalski4321")
        cy.get('#password').type("alamakota")
        cy.get('.jss58').check()
        cy.get('.jss59 > button').should("be.enabled")
    })
    it('Only email field provided', () =>{
        cy.visit("www.ohmydev.pl/register")
        cy.get('.jss96 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('#email').type("jankowalskitestowy@gmail.com")
        cy.get('.jss58').check()
        cy.get('.jss59 > button').should("be.disabled")
    })
    it('Only email and username field provided', () =>{
        cy.visit("www.ohmydev.pl/register")
        cy.get('.jss96 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('#email').type("jankowalskitestowy@gmail.com")
        cy.get('#username').type("jankowalski4321")
        cy.get('.jss58').check()
        cy.get('.jss59 > button').should("be.disabled")
    })
    it('Empty fields', () =>{
        cy.visit("www.ohmydev.pl/register")
        cy.get('.jss96 > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get('.jss58').check()
        cy.get('.jss59 > button').should("be.disabled")
    })
});


