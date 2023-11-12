//Título
console.log("Desafio Classificador de Nível de Herói")
// Criação da variável do herói
let heroi = {
    nome: "**Gesnner**",
    xp: 8457
};
// Switch case para determinar o nível com base na XP
switch (true) {
    case heroi.xp <= 1000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Ferro**.");
        break;
    case heroi.xp <= 2000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Bronze**.");
        break;
    case heroi.xp <= 5000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Prata**.");
        break;
    case heroi.xp <= 7000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Ouro**.");
        break;
    case heroi.xp <= 8000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Platina**.");
        break;
    case heroi.xp <= 9000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Ascendente**.");
        break;
    case heroi.xp <= 10000:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Imortal**.");
        break;
    default:
        console.log("O heroi de nome " + heroi.nome + " é do nível **Radiante**.");
}