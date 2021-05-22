
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

Then(`não há cotas cadastradas nesse período`, () => {
    fundosDeInvestimento.validacaoCotaNaoCadastrada();
})

Then(`realizo a exportação do arquivo`, () => {
    fundosDeInvestimento.exportCota();
})

And(`acessa a aba de Documentos e realiza o download do segundo arquivo`, () => {
    fundosDeInvestimento.accessDocuments();
})

And(`seleciono o primeiro Fundo da tabela`, () => {
    fundosDeInvestimento.accessFirstOption();
})

And(`informo data final menor que a data inicial da Cota`, () => {
    fundosDeInvestimento.pesquisarCotaDataIncorreta();
})

And(`informo data final maior que a data inicial da Cota`, () => {
    fundosDeInvestimento.getButtonCotaDataCorreta();
})