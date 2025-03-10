/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos-page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Erica Evercool Sports Bra')
        cy.get('.product_title').should('contain', 'Erica Evercool Sports Bra')
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Hawkeye Yoga Short')
        cy.get('.product_title').should('contain', 'Hawkeye Yoga Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Eos V-Neck Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Eos V-Neck Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)

            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    });

        })
        

});