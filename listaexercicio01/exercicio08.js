// ver nota 1 e mostrar matéria e nota
// ver nota 2, multiplicar pelo peso 2 e mostrar matéria e nota
// ver nota 3, multiplicar pelo peso 3 e mostrar matéria e nota
// somar as tres notas ja com os respectivos pesos e dividir pelos pesos
// escrever o resultado da operação que é a média do aluno

var readlineSync = require('readline-Sync');
console.log('Digite a nota de Matematica')
var nota1 = readlineSync.questionFloat()
console.log('Digite a nota de português ')
var nota2 = readlineSync.questionFloat()
console.log('Digite digite a nota de história ')
var nota3 = readlineSync.questionFloat()
console.log('Matématica = '+nota1)
console.log('português = '+nota2)
console.log('história = '+nota3)
var media=((nota1+(nota2*2)+(nota3*3))/6).toFixed(2)
console.log ('a média ponderada do aluno é '+media)