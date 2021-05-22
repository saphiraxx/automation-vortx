/// <reference types="Cypress" />

import fundosDeInvestimentoElements from '../pages/elements/fundosDeInvestimentoElements'
const el = new fundosDeInvestimentoElements
class fundosDeInvestimentoPage {

    accessFunctionality() {
        this.getInvestidor()
        this.getFundosDeInvestimento()
        
    }

    getInvestidor() {
        cy.wait(1000)
        cy.get(el.acceptCookies())
            .click()
        cy.get(el.buttonInvestidor())
            .click()
            
    }

    getFundosDeInvestimento() {
        cy.get(el.buttonFundosDeInvestimento())
            .click()
            
    }
  
    accessFirstOption() {
        this.getPrimeiroFundo()
        this.saveDashboard()
        
    }

    getPrimeiroFundo() {
        cy.wait(1000)
        cy.get(el.primeiroFundo())
            .click()
            
    }

    saveDashboard() {
        cy.wait(3000)
        cy.screenshot('save-dashboard')     

    }

    accessDocuments() {
        cy.get(el.documentos())
            .contains('Documentos')
            .click()
        cy.get(el.segundoArquivo())
            .contains('Demonstração Financeira')
            .click()
        cy.contains('FII - XP LOG - 26502794 - DF - 20191231.pdf')
            .click()
            
    }

    pesquisarCotaDataIncorreta() {
        cy.get(el.buttonCota())
            .click()
        cy.get(el.dataInicio())  
            .click()  
        cy.get(el.day11())
            .click()
        cy.get(el.dataFinal())  
            .click()  
        cy.get(el.day10())
            .click()
        cy.get(el.buttonAtualizar())
    }

    validacaoCotaNaoCadastrada() {
        cy.get(el.mensagemDataIncorreta())
            .should('include.text','Não há cotas cadastradas no dia')
        cy.get(el.closeModal())
            .click()
                    
    }

    getButtonCotaDataCorreta() {
        cy.get(el.buttonCota())
            .click()
        cy.get(el.dataInicio())  
            .click()  
        cy.get(el.day12())
            .click()
        cy.get(el.dataFinal())  
            .click()  
        cy.get(el.day13())
            .click()
        cy.get(el.buttonAtualizar())
            .click()

    }

    exportCota() {            
        cy.contains('FII XP LOG')
        cy.get(el.buttonExport())
            .click()
        cy.get(el.exportPDF())
            .click()
        cy.get(el.closeModal())
            .click()
                    
    }
    
}

export default fundosDeInvestimentoPage;