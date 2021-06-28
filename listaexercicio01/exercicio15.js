var carlos = 0
var andre = 0
var felipe = 0
var parc = 0
var conta = 751
var div = conta/3
parc = Math.floor(div)
var centavos = (div-parc)*conta-parc
carlos=parc
andre=parc
felipe=parc+centavos
console.log ( 'Na divisão da conta ficou '+carlos+' reais para carlos, '+andre+' reais para andre e, '+felipe+' reais para felipe')