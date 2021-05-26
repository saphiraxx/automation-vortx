#language: pt

Funcionalidade: Fundos de investimento

    Cenário: Realizar download de documento em demonstração financeira
        Dado que ele acessa o site
        Quando acessa o menu Investidor e seleciona a funcionalidade Fundos de investimento
        Então seleciono o primeiro Fundo da tabela
        E acessa a aba de Documentos e realiza o download do segundo arquivo

    Cenário: Não encontrar cotas quando a data final é menor que a incial 
        Dado que ele acessa o site
        Quando acessa o menu Investidor e seleciona a funcionalidade Fundos de investimento
        E seleciono o primeiro Fundo da tabela
        E informo data final menor que a data inicial da Cota
        Então não há cotas cadastradas nesse período

    Cenário: Realizar exportação de arquivo da Cota
        Dado que ele acessa o site
        Quando acessa o menu Investidor e seleciona a funcionalidade Fundos de investimento
        E seleciono o primeiro Fundo da tabela
        E informo data final maior que a data inicial da Cota
        Então realizo a exportação do arquivo

    