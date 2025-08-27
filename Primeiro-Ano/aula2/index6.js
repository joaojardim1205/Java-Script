/*
2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
   Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
    Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
    Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
    Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

let nome = prompt ("insira aqui seu nome")
let jogo = prompt ("insira aqui o tipo de jogo (IN = internacional) (DO = domestico)")
let etapa = (prompt("insira aqui a etapa do jogo \n(SF = semi-final) (DT = decisão de terceiro lugar) (FI = final)"))
let Categoria = Number (prompt("insira aqui a categoria do jogo (1; 2; 3 ou 4)"))
let ingressoQ = Number (prompt("insira aqui a quantidade de ingressos desejados"))
let ingressoV
let ingressoT

if (jogo == "DO"){
    console.log ("---Dados da compra--- \nNome do cliente:", nome, "\nTipo do jogo:", jogo, "\nEtapa do jogo:", etapa, "\nCategoria:", Categoria, "\nQuantidade de Ingressos:", ingressoQ)
    if (etapa == "SF"){
        if (Categoria == "1"){
            ingressoV = 1320
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 880
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 550
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 220
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
    }
    if (etapa == "DT"){
        if (Categoria == "1"){
            ingressoV = 660
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 440
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 330
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 170
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
    }
    if (etapa == "FI"){
        if (Categoria == "1"){
            ingressoV = 1980
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 1320
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 880
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 330
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: R$", ingressoV, "\nValor total: R$", ingressoT)
        }
    }
}
if (jogo == "IN"){
    console.log ("---Dados da compra--- \nNome do cliente:", nome, "\nTipo do jogo:", jogo, "\nEtapa do jogo:", etapa, "\nCategoria:", Categoria, "\nQuantidade de Ingressos:", ingressoQ)
    if (etapa == "SF"){
        if (Categoria == "1"){
            ingressoV = 1320 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 880 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 550 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 220 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
    }
    if (etapa == "DT"){
        if (Categoria == "1"){
            ingressoV = 660 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 440 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 330 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 170 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
    }
    if (etapa == "FI"){
        if (Categoria == "1"){
            ingressoV = 1980 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "2"){
            ingressoV = 1320 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "3"){
            ingressoV = 880 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
        if (Categoria == "4"){
            ingressoV = 330 / 4.10
            ingressoT = ingressoV * ingressoQ
            console.log ("\n---Valores--- \nValor do ingresso: U$", ingressoV, "\nValor total: U$", ingressoT)
        }
    }
}
