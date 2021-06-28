// escrever o numero e quantidade de centenas, dezenas e unidades

// dividir numer por 100 obtendo a quantidade de centenas
// pegar o resto da divisão e dividir por 10 obtendo a quantidade de dezenas
// pegar o resto da divisão e dividir por 1 obtendo a quantidade de unidades



var recebeDados = require('readline-sync')

var valor = Number(recebeDados.question('Digite um numero com ate e digitos: '))

var centenas = Math.floor(valor/100)
var dezenas = Math.floor((valor%100)/10)
var unidades = Math.floor((valor%50)/1)

console.log(`Centenas: ${centenas}
dezenas: ${dezenas}
unidades: ${unidades}`)