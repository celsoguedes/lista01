var diasemacidentes = 750
var ano = 0
var mes = 0
var dias = 0
var diasdoano=365
var diasdomes=30
var convAno = diasemacidentes/diasdoano
ano = Math.floor(convAno)
var convMes = (convAno-ano)*diasdoano/diasdomes
mes = Math.floor(convMes)
var convDias = (convMes-mes)*diasdomes
dias = Math.floor(convDias)
console.log ('A fábrica com '+diasemacidentes+' dias sem acidentes esta a '+ano+' anos, '+mes+' meses e '+dias+ ' sem acidentes')