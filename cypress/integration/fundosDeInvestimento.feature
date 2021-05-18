#language: pt

Funcionalidade: Fundos de investimento

    Cenário: Garantir a integridade da funcionalidade Fundos de investimento
        Dado que ele acessa o site
        Quando acessa o menu Investidor e seleciona a funcionalidade Fundos de investimento
        Então seleciona o primerio Fundo da tabela, guarda as informações da Dashboard em um arquivo
        E acessa a aba de Documentos e realiza o download do segundo arquivo, valida o botão de Cota