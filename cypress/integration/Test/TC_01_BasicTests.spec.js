// <referen/ce types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'

const homePage = new HomePage()

describe('Regression Test Suite', function() {
    beforeEach(function() {
        //runs once before all tests in the block
        cy.visit(Cypress.env('url'))
        homePage.acceptAllCookies()
        cy.fixture('data').then(function(homedata) {
            this.homedata = homedata
        })
    })
    
    it('Home Page search for certified.potato.vine', function() {
        homePage.clickSearchBox()
        homePage.enterSearchText().type(this.homedata.vineText)
        cy.wait(1000)
        homePage.selectText().each(($e1, index, $list) => {
            if($e1.text() === this.homedata.vineText) {
                $e1.click()
            }
        })
        homePage.verifyText().should('have.text', this.homedata.vineText)
    })

    it('Home Page search for Tower Bridge', function() {
        homePage.clickSearchBox()
        homePage.enterSearchText().type(this.homedata.towerBridgeText)
        homePage.selectTextPanel().each(($e1, index, $list) => {
            if($e1.text() === this.homedata.towerBridgeHotel) {
                $e1.click()
            }
        })
        homePage.verifyText().should('have.text', this.homedata.posterText)
    })

    it('Home Page search for 51.521251,-0.20358600', function() {
        homePage.clickSearchBox()
        homePage.enterSearchText().type(this.homedata.geoLocationText)
        homePage.selectTextPanel().each(($e1, index, $list) => {
            if($e1.text() === this.homedata.homeAddressText) {
                $e1.click()
            }
        })
        homePage.verifyText().should('have.text', this.homedata.homeAddressText)
    })

    it('Home Page search for wrong address', function() {
        homePage.clickSearchBox()
        homePage.enterSearchText().type(this.homedata.wrongAddressText)
        homePage.wrongTextPanel().should('have.text', this.homedata.errorText)
    })
})
