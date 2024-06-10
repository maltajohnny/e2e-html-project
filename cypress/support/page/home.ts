/// <reference types="cypress" />
import{ IMAGES, MENU, TEXTS, TITLES_SUBTITLES, LINKS } from "./elements";

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
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.The_first_version_pt1).should('have.text', Cypress.env('Texts').first_versionpt1)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.The_first_version_pt2).should('have.text', Cypress.env('Texts').first_versionpt2)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt1).should('have.text', Cypress.env('Texts').new_mascotpt1)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt2).should('have.text', Cypress.env('Texts').new_mascotpt2)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.A_new_mascot_appears_pt3).should('have.text', Cypress.env('Texts').new_mascotpt3)
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TEXTS.AndroidQ).should('have.text', Cypress.env('Texts').Different_Word)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

    }

    titles_subtitles(){
        cy.get(TITLES_SUBTITLES.page_title).should('have.text', Cypress.env('Titles_Subtitles').webpage_title)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '48px')
        .should('have.css', 'font-family', '"Bebas Neue", sans-serif')

        cy.get(TITLES_SUBTITLES.page_subtitle).should('have.text', Cypress.env('Titles_Subtitles').webpage_subtitle)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '19.2px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(TITLES_SUBTITLES.article_title).should('have.text', Cypress.env('Titles_Subtitles').story_title)
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '28.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.article_subtitle).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '20.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.article_subtitle1).should('have.text', Cypress.env('Titles_Subtitles').story_subtitle1)
        .should('have.css', 'color', 'rgb(26, 92, 55)')
        .should('have.css', 'font-size', '20.8px')
        .should('have.css', 'font-family', 'android, sans-serif')

        cy.get(TITLES_SUBTITLES.aside_subtitle).should('have.text', Cypress.env('Titles_Subtitles').list_subtitle)
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .should('have.css', 'font-size', '18.72px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')
    }

    links(){
        cy.get(LINKS.Dan_Morrill).contains('Dan Morrill').should('have.attr', 'href', 'https://androidcommunity.com/dan-morrill-shows-us-the-android-mascot-that-almost-was-20130103/')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Inkscape).contains('Inkscape').should('have.attr', 'href', 'https://inkscape.org/pt-br/')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Irina_Blok).contains('Irina Blok').should('have.attr', 'href', 'https://www.irinablok.com')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

        cy.get(LINKS.Android_History).contains('Android History').should('have.attr', 'href', 'https://www.android.com/intl/en_uk/history/')
        .should('have.css', 'color', 'rgb(6, 61, 30)')
        .should('have.css', 'font-size', '16px')
        .should('have.css', 'font-family', 'Arial, Verdana, Helvetica, sans-serif')

    }

    
    }


export default new validate()
