"use strict"

var totalDiasMes = 31

var selects = {
  day: document.querySelector("#day"),
  month: document.querySelector ("#month"),
  year: document.querySelector ("#year")
}

var resultados = {
  day: "<option>Day</option>",
  month: "<option>Month</option>",
  year: "<option>Year</option>"
}

function crearOptionsPara (campo) {

  for (var i = campo.min; i <= campo.max; i++)
    resultados.campo = resultados.campo + "<option>" + i + "</option>"


}
crearOptionsPara(day)


var selectDay = document.querySelector ("#day")
var selectMes = document.querySelector ("#month")
var selectYear = document.querySelector ("#year")
var resultado = "<option>Day</option>"
var resultadoMes = "<option>Month</option>"
var resultadoAno = "<option>Year</option>"
var meses= [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

for (var i = 1; i <= totalDiasMes; i++)
  resultados.day = resultados.day + "<option>" + i + "</option>"


for (var j = 0; j < meses.length; j++)
  resultados.month = resultados.month + "<option>" + meses[j] + "</option>"


for (var k = 1905; k <= 2016; k++)

  resultados.year = resultados.year + "<option>" + k + "</option>"


selectDay.innerHTML = resultados.day
selectMes.innerHTML = resultados.month
selectYear.innerHTML = resultados.year


//refactorizar
