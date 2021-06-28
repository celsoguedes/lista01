// ler dia do mes
// ler mes atual
// diminuir o mes atual dos meses ja transcorridos
// multiplicar quantidade de meses por 30 dias de um mes e somar com os dias do mes em curso
var readlineSync = require('readline-Sync');
console.log('Digite o qual dia é hoje')
var dia = readlineSync.questionFloat()
console.log('Digite qual mês estamos ')
var mes = readlineSync.questionFloat()
console.log('Digite qual ano estamos ')
var ano = readlineSync.questionFloat()
console.log(`hoje é dia ${dia}/${mes}/${ano}.`)
var total=(mes-1)*30+dia
console.log ('Nesta data já se passaram '+total+' dias corridos')