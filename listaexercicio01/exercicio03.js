// ver e mostrar quantos pães são vendidos
// ver e mostrar quantas broas são vendidas
// ver e mostrar o valor do pão
// ver e mostrar o valor da broa
// multiplicar o valor do pão pela quantidade de venda e mostrar
// multiplicar o valor da broa pela quantidade de venda e mostrar
// somar o valor da venda dos pães mais a venda das broas e apresentar o total arrecadado com a venda
// calcular 10% do valor total da venda para a poupança e mostrar valor a ser guardado
var readlineSync = require('readline-Sync');
console.log('Digite a quantidade de pães vendidos')
var pães = readlineSync.questionFloat()
console.log('Digite a quantidade de broas vendidas ')
var broas = readlineSync.questionFloat()
var precpão=0.12; console.log ('O preço do pão é '+precpão)
var precbroa=1.50; console.log ('O preço da broa  é '+precbroa)
var vendapão=pães*precpão; console.log ('valor arrecadado com os pães = '+vendapão)
var vendabroa=broas*precbroa; console.log ('valor arrecadado com as broas = '+vendabroa)
var total=vendabroa+vendapão; console.log ('total arrecadado com a venda = '+total)
var poupança=total*0.10; console.log ('valor de 10% da venda a ser guardado na poupança = '+poupança)