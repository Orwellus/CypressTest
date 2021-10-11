//This is spec file, inside your google-search.spec.ts
import { eq, first, isTypedArray } from 'cypress/types/lodash';


describe('Ohmydev Test', () => {
    it('Checking site avalibility, accepting cookie policy',() => {
        cy.visit('www.ohmydev.pl');
        cy.get('.jss662 > .MuiButtonBase-root > .MuiButton-label').click();
    });
    it('Geting list of posted elements', () =>{
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("cypress{enter}")
        cy.get('.jss679.jss680').children('.MuiBox-root.jss853').children('div').its('length').should('eq',3)
    })
});


