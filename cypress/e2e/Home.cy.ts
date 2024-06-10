/// <reference types="cypress" />

import validate from '../support/page/home'
describe('Validar aplicação html: imagens, vídeo, texto, etc... ', () => {
  beforeEach(() => {
      
    cy.visit('/')
  }),

  it('Validação da tela home: Menu', () => {
    validate.menu()
  }),

  it('Validação da tela home: Images', () => {
    validate.images()

  }),

  it('Validação da tela home: Texts', () =>{
    validate.texts()
  }),

  it('Validação da tela home: Titles and Subtitles', () =>{
    validate.titles_subtitles()
  }),

  it('Validação da tela home: Links', () =>{
    validate.links()
  })
})