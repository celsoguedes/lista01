// ver e mostrar largura
// ver e mostrar comprimento
// calcular area multiplicando um pelo outro
// apresentar resultado

var readlineSync = require('readline-Sync');
console.log('Digite a largura do terreno')
var larg = readlineSync.questionFloat()
console.log('Digite o comprimento do terreno ')
var comp = readlineSync.questionFloat()
var area=larg*comp
console.log ('a area total do terreno é ' + area + ' M2')