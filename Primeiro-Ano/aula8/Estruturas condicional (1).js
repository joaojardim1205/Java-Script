// Faça um programa que leia os pontos de vida de um personagem, em seguida leia um dano que esse personagem irá receber. Imprima o restante da vida do personagek, se chegar a zero, imprima "derrotado"

let VidaPersonagem = Number (prompt ("Você esta jogando um RPG, quanto de vida o seu personagem tem?"))

let DanoPersonagem = parseFloat (prompt ("Agora, o seu personagem acabou de tomar dano. Quanto de dano o seu personagem tomou?"))

VidaPersonagem = VidaPersonagem - DanoPersonagem

if (VidaPersonagem <= 0) {
    console.log ("Que pena, derrotado!")
} else {
    console.log ("O seu personagem ficou com " + VidaPersonagem + " de vida")
}