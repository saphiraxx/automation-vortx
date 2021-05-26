/// <reference types="Cypress" />

import fundosDeInvestimentoElements from '../pages/elements/fundosDeInvestimentoElements'
const el = new fundosDeInvestimentoElements
class fundosDeInvestimentoPage {

    acessarFuncionalidade() {
        this.Investidor()
        this.FundosDeInvestimento()
        
    }

    Investidor() {
        cy.wait(1000)
        cy.get(el.aceitarCookies())
            .click()
        cy.get(el.botaoInvestidor())
            .click()
            
    }

    FundosDeInvestimento() {
        cy.get(el.botaoFundosDeInvestimento())
            .click()
            
    }
  
    acessarPrimeiraOpcao() {
        this.acessarPrimeiroFundo()
        this.salvarDashboard()
        
    }

    acessarPrimeiroFundo() {
        cy.wait(1000)
        cy.get(el.primeiroFundo())
            .click()
            
    }

    salvarDashboard() {
        cy.wait(3000)
        cy.screenshot('save-dashboard')     

    }

    acessarDocumentos() {
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
        cy.get(el.botaoCota())
            .click()
        cy.get(el.dataInicio())  
            .click()  
        cy.get(el.dia11())
            .click()
        cy.get(el.dataFinal())  
            .click()  
        cy.get(el.dia10())
            .click()
        cy.get(el.botaoAtualizar())
    }

    validacaoCotaNaoCadastrada() {
        cy.get(el.mensagemDataIncorreta())
            .should('include.text','Não há cotas cadastradas no dia')
        cy.get(el.fecharModal())
            .click()
                    
    }

    pesquisarCotaDataCorreta() {
        cy.get(el.botaoCota())
            .click()
        cy.get(el.dataInicio())  
            .click()  
        cy.get(el.dia12())
            .click()
        cy.get(el.dataFinal())  
            .click()  
        cy.get(el.dia13())
            .click()
        cy.get(el.botaoAtualizar())
            .click()

    }

    exportarCota() {            
        cy.contains('FII XP LOG')
        cy.get(el.botaoExport())
            .click()
        cy.get(el.exportarPDF())
            .click()
        cy.get(el.fecharModal())
            .click()
                    
    }
    
}

export default fundosDeInvestimentoPage;