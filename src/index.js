let nomeHeroi = "Joãozinho"
let XP = 1890
switch (true) {
    case XP <= 1000:
        XP = "Ferro"
        break
    case XP >= 1001 && XP <= 2000:
        XP = "Bronze";
        break;
    case XP >= 2001 && XP <= 5000:
        XP = "Prata"
        break
    case XP >= 5001 && XP <= 7000:
        XP = "Ouro";
        break;
    case XP >= 7001 && XP <= 8000:
        XP = "Platina"
        break
    case XP >= 8001 && XP <= 9000:
        XP = "Ascendente";
        break;
    case XP >= 9001 && XP <= 10000:
        XP = "Imortal"
        break
    case XP >= 10001:
        XP = "Radiante";
        break;
}
console.log("O Heroí de nome " + nomeHeroi + " está no nível de " + XP + "!")


//Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante