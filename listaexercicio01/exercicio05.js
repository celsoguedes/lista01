// ver e mostrar qual o valor a abastecer
// ver preço por litro
// dividir o valor em dinheiro pelo preço por litro
// escrever a quantidade de litros a abastecer

var readlineSync = require('readline-Sync');
console.log('Digite quanto voce quer colocar de dinheiro')
var din = readlineSync.questionFloat()
console.log('Digite o preço da asolina ')
var gas = readlineSync.questionFloat()
//var din=80.00; console.log ('rafael colocou '+din+' reais de gasolina em seu carro' )
//var gas=5.45; console.log ('o valor do litro da gasolina é = '+gas)
var total=din/gas
console.log('com '+din+' reais Rafael colocou '+total+' litros de gasolina do seu carro')