// ler Nome e data de nascimento
// ler e mostrar quantos anos tem
// converter anos em dias multiplicando os mesmos por 365 dias
// escrever o nome e o resultado da conversão

var readlineSync = require('readline-Sync')
var nome = readlineSync.question('Digite Seu Nome ')
var anos = readlineSync.questionFloat('Digite quantos anos voce tem ')
console.log (nome +' tem '+anos+' anos')
var convanos=anos*365
console.log (nome +' você já viveu ' +convanos+' dias de vida')