import { isTypedArray } from 'cypress/types/lodash';


describe('Tests of method - Compact', () => {
    it('GET request using proper values',() => {
        var lat = 50.2648
        var lon = 19.0237
        var altitude = 266
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/compact.json',
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.body).property("properties").to.have.property("timeseries")
        })
    });
    it('GET request using empty values',() => {
        var lat= ''
        var lon= ''
        var altitude = ''
        cy.request({
            method: "GET",
            url :'https://api.met.no/weatherapi/locationforecast/2.0/compact.json',
            failOnStatusCode: false,
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.status).to.be.eq(400)
        })
    });
    it('GET request using invalid values',() => {
        var lat = 'Jan'
        var lon = 'Kowalski'
        var altitude = 266
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url :'https://api.met.no/weatherapi/locationforecast/2.0/compact.json',
            qs:{
                'lat' : lat,
                'lon' : lon,
                'altitude' : altitude,
            }
        }).then((response)=>{
            expect(response.status).to.be.eq(400)
        })
    });
    
  
});
