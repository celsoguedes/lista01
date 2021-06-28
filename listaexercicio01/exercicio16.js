// colocar título "Produção de sanduiches" 
// Mostrar receita do sanduiche
// ler peso da fatia de queijo e multiplicar por dois que é o usado em um sanduiche
// ler peso da fatia de presunto
// ler peso da rodela de hamburguer
// ler quantidade de sanduiches a serem feitos e mostrar
// multiplicar quantidade de queijo pela quantidade de sanduiche
// multiplicar quantidade de presunto pela quantidade de sanduiche
// multiplicar quantidade de hamburguer pela quantidade de sanduiche
// escrever cada resultado obtido como quantidade dos produtos para se produzir a quantidade de sanduiches pedida

console.log (' PRODUÇÃO DE SANDUICHES')
console.log ( 'cada sanduiche contem 2 fatias de queijo, 1 de presunto e uma rodela de hambúrguer')
var pesoq=0.05*2
var pesop=0.05
var pesoh=0.1
var quantsand=10; console.log ('serão feitos '+quantsand+' Sanduiches')
var quantq=quantsand*pesoq
var quantp=quantsand*pesop
var quanth=quantsand*pesoh
console.log ('para produzir 10 sanduiches voce precisa de '+quantq+'kg de queijo, '+quantp+' kg de presunto e '+quanth+' kg de hambúrguer')