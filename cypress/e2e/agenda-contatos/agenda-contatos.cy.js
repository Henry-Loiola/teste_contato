/// <reference types='cypress' />

describe("Teste para agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    // Teste de adicionar
    it("Deve incluir informações no formulário", () => {
        cy.get('.contato').then((contatos) => {
            const qtDeContatos = contatos.length;
            cy.get('input[type="text"]').type("Giovanna");      
            cy.get('input[type="email"]').type("gio@teste.com");
            cy.get('input[type="tel"]').type("21992345678");
            cy.contains("Adicionar").click();
            cy.get('.contato').should('have.length', qtDeContatos + 1);
        });
        cy.screenshot("teste-incluir");
    });
    // Teste de editar
    it("Deve alterar a informação da lista", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
        cy.get('input[type="text"]').clear().type("Henry"); 
        cy.get('input[type="email"]').clear().type("henry@teste.com"); 
        cy.get('input[type="tel"]').clear().type("21912345678"); 
        cy.get(".alterar").click(); 

        cy.get(".contato").should("contain", "Henry");
        cy.get(".contato").should("contain", "henry@teste.com");
        cy.get(".contato").should("contain", "21912345678");
        cy.screenshot("teste-editar"); 
    });
    // Teste para remover
    it("Deve remover um contato da lista", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
        cy.screenshot("teste-remover"); 
    });
});