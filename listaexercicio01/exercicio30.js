// ler salário fixo var salfixo=1250
// ler vendas var vendas=8430
// calcular comissão de 4% sobre as vendas var comissão=vendas*4%
// somar proventos var salariofinal=salfixo+comissão
// mostrar salario, comissão e salario final console.log ('salario fixo = '+salfixo+' + '+comissão+' o salario final é = '+salariofinal+' reais.')

var salfixo=(1250); console.log ('Salario '+salfixo)
var vendas=(8430); console.log ('Vendas '+vendas)
var comissão= (vendas*0.04); console.log ('Comissão de 4% sobre vendas '+comissão)
var salariofinal = (salfixo+comissão).toFixed(2)
console.log ('salario fixo = '+salfixo+' + '+comissão+' o salario final é = '+salariofinal+' reais.')