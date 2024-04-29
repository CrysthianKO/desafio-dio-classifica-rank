var ranksDisponiveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];


const calculaSaldo = (vitorias, derrotas) => {
    return vitorias - derrotas;
};

const classificaRank = (saldoVitorias) => {

    var nivel;

    if (saldoVitorias <= 10) {
        nivel = ranksDisponiveis[0];
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = ranksDisponiveis[1];
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = ranksDisponiveis[2];
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = ranksDisponiveis[3];
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = ranksDisponiveis[4];
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = ranksDisponiveis[5];
    } else if (saldoVitorias > 100) {
        nivel = ranksDisponiveis[6];
    }

    return nivel;
};

module.exports = {
    calculaSaldo,
    classificaRank
};