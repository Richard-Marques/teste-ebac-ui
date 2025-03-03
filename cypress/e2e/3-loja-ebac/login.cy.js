/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {    
        cy.get('#username').type('richardteste@gmail.com')
        cy.get('#password').type('R36255909')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, richardteste-6671 (não é richardteste-6671? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { 
        cy.get('#username').type('richardtesteste@gmail.com')
        cy.get('#password').type('R36255909')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('richardteste@gmail.com')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail richardteste@gmail.com está incorreta. Perdeu a senha?')
    });
})