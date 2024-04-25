/// <reference types="cypress" />

import validate from '../support/page/home'
describe('Validar aplicação html: imagens, vídeo, texto, etc... ', () => {
  beforeEach(() => {
     
    cy.visit('/')
  })

  it('Validação da tela home: Menu', () => {
    validate.menu()
  })

  it('Validação da tela home: Images', () => {
    validate.images()

  })
})