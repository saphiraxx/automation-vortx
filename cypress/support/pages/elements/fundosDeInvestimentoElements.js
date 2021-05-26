class fundosDeInvestimentoElements {
    botaoInvestidor = () => { return '#investidor' }
    botaoFundosDeInvestimento = () => { return '#investidor4' }
    primeiroFundo = () => { return '[value="FII - XP LOG FUNDO DE INVESTIMENTO IMOBILIARIO  "]' }
    aceitarCookies = () => { return '.sc-gzVnrw > .MuiButtonBase-root' }
    documentos = () => { return '.fundo-detalhe-navbar' }
    segundoArquivo = () => { return '.fundo-documentos-tipo' }
    botaoCota = () => { return '.fundo-detalhe-header > .MuiButtonBase-root' }
    dataInicio = () => { return ':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > input' }
    dia11 = () => { return '.react-datepicker__day--011' }
    dataFinal = () => { return '[style="margin-top: 15px;"] > .react-datepicker-wrapper > .react-datepicker__input-container > input' }
    dia10 = () => { return '.react-datepicker__day--010' }
    botaoAtualizar = () => { return '.cota-datepicker > .MuiButtonBase-root > .MuiButton-label' }
    mensagemDataIncorreta  = () => { return '#tabela-pu-pdf' }
    dia12  = () => { return '.react-datepicker__day--012' }
    dia13  = () => { return '.react-datepicker__day--013' }
    botaoExport = () => { return '.jss8  > :nth-child(1) > div > :nth-child(1) > .MuiButtonBase-root' }
    exportarPDF  = () => { return '.MuiList-root > [tabindex="-1"]' }
    fecharModal = () => { return '.modal-content > :nth-child(1) > .close'}
}

export default fundosDeInvestimentoElements;