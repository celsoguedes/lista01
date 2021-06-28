// ver valor da hora normal trabalhada e mostrar
// ver valor da hora extra e mostrar
// ver quantidade de horas normais e mostrar
// ver quantidade de horas extras e mostrar
// calcular e escrever salario bruto igual quantidade de horas x valor de horas = quantidade de horas extras xvalor de horas extras
// calcular 10% sob o salario bruto para impostos
// subtrair os impostos do salario bruto para obter o salario liquido
// escrever a quantidade de hora trabalhadas dicriminada, o sal bruto, os impostos e o salario liquido

var hra=10; console.log ('valor da hora normal trabalhada ='+hra)
var hraextra=15; console.log ('valor da hora extra trabalhada ='+hraextra)
var quanthra=174; console.log ('quantidade de horas normais trabalhadas '+quanthra)
var quanthraex=30; console.log ('quantidade de horas extras trabalhadas '+quanthraex)
var salbruto=(quanthra*hra)+(quanthraex*hraextra)
var impostos=salbruto*0.10
var salliq=salbruto-impostos
console.log ('com 174 hrs nomais mais 30 hrs extras o sal. bruto será de '+salbruto+' reais, menos '+impostos+' reais de impostos terá um sal.liquido de '+salliq+' reais.' )