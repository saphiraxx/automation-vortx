
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
    fundosDeInvestimento.acessarFuncionalidade();
})

Then(`seleciona o primerio Fundo da tabela`, () => {
    fundosDeInvestimento.acessarPrimeiraOpcao();
})

Then(`não há cotas cadastradas nesse período`, () => {
    fundosDeInvestimento.validacaoCotaNaoCadastrada();
})

Then(`realizo a exportação do arquivo`, () => {
    fundosDeInvestimento.exportarCota();
})

And(`acessa a aba de Documentos e realiza o download do segundo arquivo`, () => {
    fundosDeInvestimento.acessarDocumentos();
})

And(`seleciono o primeiro Fundo da tabela`, () => {
    fundosDeInvestimento.acessarPrimeiraOpcao();
})

And(`informo data final menor que a data inicial da Cota`, () => {
    fundosDeInvestimento.pesquisarCotaDataIncorreta();
})

And(`informo data final maior que a data inicial da Cota`, () => {
    fundosDeInvestimento.pesquisarCotaDataCorreta();
})