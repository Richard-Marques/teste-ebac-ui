/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('#content')
            .contains('Aether Gym Pant')
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

});