
import fundosDeInvestimentoPage from '../pages/fundosDeInvestimentoPage'
import fundosDeInvestimentoElements from '../pages/elements/fundosDeInvestimentoElements'
const fundosDeInvestimento = new fundosDeInvestimentoPage
const elements = new fundosDeInvestimentoElements

beforeEach(() => {
    Given(`que ele acessa o site`, () => {
        cy.visit(Cypress.env("baseURL"))
    })
})

When(`acessa o menu Investidor e seleciona a funcionalidade Fundos de investimento`, () => {
    fundosDeInvestimento.accessFunctionality();
})

Then(`seleciona o primerio Fundo da tabela`, () => {
    fundosDeInvestimento.accessFirstOption();
})

And(`acessa a aba de Documentos e realiza o download do segundo arquivo, valida o botão de Cota`, () => {
    fundosDeInvestimento.accessDocuments();
})