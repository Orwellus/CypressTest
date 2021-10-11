//This is spec file, inside your google-search.spec.ts
import { eq, first, isTypedArray } from 'cypress/types/lodash';


describe('Ohmydev Test', () => {
    it('Checking site avalibility, accepting cookie policy',() => {
        cy.visit('www.ohmydev.pl');
        cy.get('.jss662 > .MuiButtonBase-root > .MuiButton-label').click();
    });
    it('Geting list of posted elements', () =>{
        cy.get('.jss1.jss2').children('.MuiBox-root.jss90').children('div').its('length').should('eq',30)
    })
    it('Getting details of posted element', () =>{
        var posts = cy.get('.jss1.jss2').children('.MuiBox-root.jss90').children('div')
        var fpost = posts.first()
        fpost.should("not.be.empty")
        fpost.children('.jss94').children('.jss95').children('.jss100').children('.jss101').children('h1').children('a').should("not.be.empty")
    })
});


