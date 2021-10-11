import { isTypedArray, round } from 'cypress/types/lodash';


describe('Tests of method - Complete', () => {
    it('GET request using proper values',() => {
        var lat = 50.264
        var lon = 19.023
        var altitude = 266
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/complete.json',
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).property("geometry").to.have.property("coordinates")
        })
    });
    it('Validating values of property - coordinates',() => {
        var lat = 50.264
        var lon = 19.023
        var altitude = -60
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/complete.json',
            failOnStatusCode: false,
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.body).property('geometry').to.have.property('coordinates').to.have.lengthOf(3)
        })
    });
    it('Validating value of property - type',() => {
        var lat = 50.264
        var lon = 19.023
        var altitude = 266
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url :'https://api.met.no/weatherapi/locationforecast/2.0/complete.json',
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.body).have.property('type').equal("Feature")
        })
    });
});
