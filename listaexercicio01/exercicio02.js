// ver e mostrar quantos cavalos foram comprados
// multiplicar o numero de cavalos por 4 patas
// apresentar a quantidade de ferraduras

var readlineSync = require('readline-Sync');
console.log('Digite quantos cavalos foram comprados')
var cav = readlineSync.questionFloat()
console.log ('No haras foram comprados '+cav+' cavalos')
var ferr=cav*4
console.log ('são nescessárias '+ferr+' ferraduras para equipar todos os cavalos comprados.')
