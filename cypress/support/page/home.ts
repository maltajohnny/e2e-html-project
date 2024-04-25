/// <reference types="cypress" />
import{ IMAGES, MENU } from "./elements";

class validate {

    menu(){
        cy.get(MENU.Home).contains('Home')
        cy.get(MENU.News).contains('Noticias')
        cy.get(MENU.Curiosities).contains('Curiosidades')
        cy.get(MENU.Contact_us).contains('Fale Conosco')
    }

    images(){
        cy.get(IMAGES.Dandrois).should('be.visible')
        cy.get(IMAGES.Russian_illustrator).should('be.visible')
        cy.get(IMAGES.Bugdroid).should('be.visible')
    }
}

export default new validate()
