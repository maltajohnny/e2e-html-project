/// <reference types="cypress" />
import{ IMAGES, MENU, TEXTS, TITLES_SUBTITLES } from "./elements";

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

    texts(){
        cy.get(TEXTS.Android_mascot_history).should('have.text', Cypress.env('Texts').android_history)
        cy.get(TEXTS.The_first_version_pt1).should('have.text', Cypress.env('Texts').first_versionpt1)
        cy.get(TEXTS.The_first_version_pt2).should('have.text', Cypress.env('Texts').first_versionpt2)
        cy.get(TEXTS.A_new_mascot_appears_pt1).should('have.text', Cypress.env('Texts').new_mascotpt1)
        cy.get(TEXTS.A_new_mascot_appears_pt2).should('have.text', Cypress.env('Texts').new_mascotpt2)
        cy.get(TEXTS.A_new_mascot_appears_pt3).should('have.text', Cypress.env('Texts').new_mascotpt3)
    }

    titles_subtitles(){
        cy.get(TITLES_SUBTITLES.page_title).should('have.text', Cypress.env('Titles_Subtitles').webpage_title)
        cy.get(TITLES_SUBTITLES.page_subtitle).should('have.text', Cypress.env('Titles_Subtitles').webpage_subtitle)
        cy.get(TITLES_SUBTITLES.article_title).should('have.text', Cypress.env('Titles_Subtitles').story_title)
        cy.get(TITLES_SUBTITLES.article_subtitle).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle)
        cy.get(TITLES_SUBTITLES.article_subtitle1).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle1)
        cy.get(TITLES_SUBTITLES.aside_subtitle).should('have.text', Cypress.env('Titles_Subtitles').list_subtitle)
    }

}

export default new validate()
