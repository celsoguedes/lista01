// ver e mostrarsalario de joão var sal=1200
// ver e mostrarconta 1 var cA=200
// ver e mostrarconta 2 var cB=120
// acrescer 2% de multa conta 1 var c1majo=(c1*0.02)+c1
// acrescer 2% de multa conta 2 var c2majo=(c2*0.02)+c2
// somar as contas à pagar e diminuir do sálario var sobra=sal-(c1majo+c2majo)
// mostrar salario, contas pagas com juros e o que resta a joão console.log ('com um salario de $'+sal+' foi pago C1 $''+c1majo+',' c2 $ '+c2majo+' e restou a João $ '+sobra+' reais+)

var sal=1200; console.log ('Salário '+sal)
var cA=200; console.log ('conta 1 '+cA)
var cB=120; console.log ('conta 1 '+cB)
var cAmajo=(cA*0.02)+cA; console.log ('conta 1 com multa '+cAmajo)
var cBmajo=(cB*0.02)+cB; console.log ('conta 2 com multa '+cBmajo)
var sobra=sal-(cAmajo+cBmajo)
console.log ('com um salario de $'+sal+' foi pago primeira conta $'+cAmajo+', a segunda conta '+cBmajo+' e restou a João $ '+sobra+' reais')