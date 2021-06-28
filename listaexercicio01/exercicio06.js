// ler o preço do quilo do alimento e mostrar
// ler o peso do prato montado pelo cliente e mostrar
// multiplicar o peso pelo preço pa saber o valor a pagar
// escrever o preço a pagar
var readlineSync = require('readline-Sync');
console.log('Digite o peso')
var peso = readlineSync.questionFloat()
var precquilo=12.00.toFixed(2); console.log ('preço por quilo ='+precquilo)
var pagar=(precquilo*peso).toFixed(2)
console.log ('caro cliente voce pagará '+pagar+' pela sua refeição, agradecemos a preferência')