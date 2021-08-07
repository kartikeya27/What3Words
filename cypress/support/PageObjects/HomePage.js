/// <reference types="cypress" />

//Hompe page related method and css locator
class HomePage {

    acceptAllCookies() {
        return cy.get('[data-testid=AcceptAll] > .MuiButton-label')
        .contains('Accept').click({force: true})
    }

    clickSearchBox() {
        return cy.get('.SearchPanel-Icon').click()
    }

    enterSearchText() {
        return cy.get('input.MuiInputBase-input').clear()
    }

    selectText() {
        return cy.get('div.ThreeWordAddress')
    }

    selectTextPanel() {
        return cy.get('div.SearchPanel-LocationLine1')
    }

    wrongTextPanel() {
        return cy.get('div.NotificationMessage-Label div:nth-child(1)')
    }

    verifyText() {
        return cy.get('div.ThreeWordAddress-Text.notranslate')
    }
}

export default HomePage;