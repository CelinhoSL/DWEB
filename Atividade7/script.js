const regra = ["ganhou", "empatou", "perdeu"];

const escolhas = [
    { id: 0, nome: "tesoura" },
    { id: 1, nome: "papel" },
    { id: 2, nome: "pedra" },
];

let jogador = prompt("escolha pedra, papel ou tesoura");

let numeric = escolhas.find(e => e.nome == jogador);

if (!numeric) {
    alert("Escolha inválida!");
} else {
    const escolha = numeric.id;

    let computador = escolhas[Math.floor(Math.random() * 3)];

    let cNumeric = escolhas.find(e => e.id == computador.id);
    let cEscolha = cNumeric.nome;

    let resultado;

    if (escolha == cNumeric.id) {
        resultado = regra[1];
    } else if (
        (escolha == 0 && cNumeric.id == 1) ||
        (escolha == 1 && cNumeric.id == 2) ||
        (escolha == 2 && cNumeric.id == 0)
    ) {
        resultado = regra[0];
    } else {
        resultado = regra[2];
    }

    alert(`Você ${resultado}, seu adversário escolheu ${cEscolha}`);
    
}