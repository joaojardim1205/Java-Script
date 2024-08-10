const arrayDog = ["American Bully", "Labrador", "Golden Retriver", "chihuahua", "husky" ]
const Resposta = (prompt ("Insira aqui um numero de 0 a 4 para pegar uma raça de cachorro"))

switch (Resposta){
    case "0":
        console.log (arrayDog[0])
        break
    case "1":
        console.log (arrayDog[1])
        break
    case "2":
        console.log (arrayDog[2])
        break
    case "3":
        console.log (arrayDog[3])
        break
    case "4":
    console.log (arrayDog[4])
    break
    default:
        console.log ("Numero invalido!")
}
