// Faça um programa que peça para o usuario digitar uma senha, enquanto a senha nao estiver correta, exiba mensagem de erro e peça a senha novamente

let senhaUsuario = prompt ("insira aqui a sua senha")
let senhaResposta

while (senhaResposta !== senhaUsuario) {
    senhaResposta = prompt ("insira aqui a senha correta inserida anteriormente")

    if (senhaResposta !== senhaUsuario) {
        console.log ("senha errada, tente novamente")
    }
}