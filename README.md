# Sorteio da Mega-Sena - Desafio de Lógica de Programação

## Demonstração
Este projeto é uma solução para o sorteio de números da **Mega-Sena**. O código gera 6 números aleatórios entre 1 e 60 e os exibe em ordem crescente. Não há uma interface gráfica para este projeto, mas você pode ver os números sorteados diretamente no console.

## Sumário
1. [Título do Projeto](#título-do-projeto)
2. [Demonstração](#demonstração)
3. [Entendimento do Negócio](#entendimento-do-negócio)
4. [Entendimento dos Dados](#entendimento-dos-dados)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Como Usar](#como-usar)
7. [Abordagem](#abordagem)
8. [Status do Projeto](#status-do-projeto)
9. [Créditos](#créditos)

## Título do Projeto
Este projeto consiste em um **sorteio aleatório** de 6 números da **Mega-Sena**, gerando combinações únicas a partir de um conjunto de números entre 1 e 60. Os números sorteados são apresentados em ordem crescente.

## Demonstração
Para ver o funcionamento do sorteio, execute a função `sortearMegaSena()` no console do navegador ou em um ambiente de desenvolvimento local que suporte JavaScript.

## Entendimento do Negócio
A função que foi criada tem como principal objetivo realizar um sorteio de 6 números entre 1 e 60, que é a lógica utilizada na **Mega-Sena**. Este código pode ser utilizado em diversos contextos, como simulações de sorteios para eventos, jogos de loteria ou desafios de programação.

### Objetivos do Projeto:
- **Gerar números aleatórios** entre 1 e 60, sem repetição.
- **Ordenar os números** sorteados em ordem crescente.
- **Exibir os números sorteados** de maneira simples e clara.

## Entendimento dos Dados
O sorteio utiliza um conjunto de dados que representa os números de 1 a 60. O código embaralha esse conjunto e seleciona os 6 primeiros números sorteados. Esses números são então organizados em ordem crescente para exibição.

## Tecnologias Utilizadas
- **Linguagem**: JavaScript

## Como Usar
1. **Executar no Navegador**: Abra as ferramentas de desenvolvedor no seu navegador (F12 ou Ctrl+Shift+I) e vá até a aba "Console".
2. **Executar no Node.js**: Se você preferir executar o código fora do navegador, você pode usar o Node.js:
   - Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
   - Crie um arquivo chamado `megasena.js` e cole o código fornecido.
   - Execute o arquivo no terminal com o comando:
     ```bash
     node megasena.js
     ```
3. **Resultado**: O sorteio será exibido no console com os 6 números sorteados em ordem crescente.

## Abordagem
Este projeto foi desenvolvido como parte de um **desafio de lógica de programação**, utilizando um algoritmo simples para embaralhar os números e selecionar uma combinação aleatória, simulando o sorteio da **Mega-Sena**.

### Etapas do algoritmo:
1. **Gerar um array de números** de 1 a 60.
2. **Embaralhar** esse array usando o algoritmo de Fisher-Yates.
3. **Selecionar os 6 primeiros números** após o embaralhamento.
4. **Ordenar os números** em ordem crescente.
5. **Exibir os números** no console.

## Status do Projeto
- **Versão atual**: 1.0
- **Status**: Projeto finalizado.

## Créditos
- **Desenvolvedor Principal**: Amanda Albuquerque.
