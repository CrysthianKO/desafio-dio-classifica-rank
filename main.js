const { calculaSaldo, classificaRank } = require('./model.js');

var quantidadeVitorias = 5;
var quantidadeDerrotas = 4;

const saldoRankeada = calculaSaldo(quantidadeVitorias, quantidadeDerrotas);
const nivel = classificaRank(saldoRankeada);

console.log("saldo rankeada " + saldoRankeada);

console.log("O Herói tem de saldo de "+ saldoRankeada +" está no nível de " + nivel);