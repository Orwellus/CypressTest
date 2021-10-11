import { isTypedArray } from 'cypress/types/lodash';


describe('Tests of method - Status', () => {
    it('Checking status of response',() => {
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/status.json',
        }).then((response)=>{
            expect(response.status).to.be.eq(200)
        })
    });
    it('Checking if response returns value',() => {
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/status.json',
        }).then((response)=>{
            expect(response.body).property("last_update")
        })
    });
    it('Checking if response value is not empty',() => {
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/status.json',
        }).then((response)=>{
            expect(response.body).property("last_update").is.not.empty
        })
    });

});
