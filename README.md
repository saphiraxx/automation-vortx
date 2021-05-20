# showMeTheCode_Vórtx 

Avaliação Técnica da Vórtx.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Como rodar os testes](#como-rodar-os-testes)
- [Licença](#licença)

---

## Pré-requisitos

- [Instalar Node e NPM](https://nodejs.org/en/)
- [Instalar Vscode ou outra IDE](https://code.visualstudio.com/download)
- [Instalar Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing)


## Configuração

Configuração do repositório.
> abrir o repositório em sua IDE  (recomendo o VSCode)

Após abrir o repositório:
> instalar dependências
```bash
$ npm ci
```

## Como rodar os testes

Como rodar os testes do repositório.
> rodar no modo interativo do cypress
```bash
$ npm run cy:open
```

> rodar os testes em headless
```bash
$ npm run cy:headless
```

> rodar os testes no chrome
```bash
$ npm run cy:chrome
```

> rodar os testes no firefox
```bash
$ npm run cy:firefox
```

## Como rodar os testes e gerar o relatório Allure Reports

> rodar os testes com o comando:
```bash
$  npm run cy:allure
```

> gerar o relatório em HTML:
```bash
$  npm run allure:generate
```

> para abrir o relatório:
```bash
$  npm run allure:open
```

> para excluir as pastar geradas pelo Allure:
```bash
$  npm run allure:clear
```

> para excluir as pastas, rodar o teste e gerar o relatório HTML, use este comando:
```bash
$  npm run test
```

---

## Licença

[![Licença](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT licença](http://opensource.org/licenses/mit-license.php)**
- Direito autoral - 2021 © <a href="https://www.linkedin.com/in/saphira-xavier-02b3841ab/" target="_blank">Saphira Xavier</a>.