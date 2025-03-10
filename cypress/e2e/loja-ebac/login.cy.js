/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, richardteste-6671 (não é richardteste-6671? Sair)')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario , { log: false })
            cy.get('#password').type(perfil.senha , { log: false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, richardteste-6671 (não é richardteste-6671? Sair)')
        })
    });

    it.only('Deve fazer login com sucesso - usando Comandos customizados', () => {
        cy.login('richardteste@gmail.com', 'R36255909')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, richardteste-6671 (não é richardteste-6671? Sair)')
    });

})