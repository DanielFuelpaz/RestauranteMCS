let fechaActual = new Date();

let calendario = document.getElementById('calendario');
let calendario1 = document.getElementById('calendario1');
let calendario2 = document.getElementById('calendario2');
let calendario3 = document.getElementById('calendario3');

document.addEventListener("DOMContentLoaded", function() {
  calendario.innerHTML=generarCalendario(fechaActual);
  calendario1.innerHTML=generarCalendario(fechaActual);
  calendario2.innerHTML=generarCalendario(fechaActual);
  calendario3.innerHTML=generarCalendario(fechaActual);
});

function generarCalendario(fecha) {
  let diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  let nombreMes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();

  let encabezado = '<tr><th colspan="7">' + nombreMes + ' ' + anio +'</th></tr><tr>';
  for (let i = 0; i < diasSemana.length; i++) {
    encabezado += '<th>' + diasSemana[i] + '</th>';
  }
  encabezado += '</tr>';

  let dias = '';
  let primerDia = new Date(fecha.getFullYear(), fecha.getMonth(), 1).getDay();
  let diasTotales = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
  let dia = 1;

  for (let i = 0; i < 6; i++) {
    dias += '<tr>';
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < primerDia) {
        dias += '<td></td>';
      } else if (dia > diasTotales) {
        break;
      } else {
        dias += '<td>' + dia + '</td>';
        dia++;
      }
    }
    dias += '</tr>';
  }
    return '<table>'+ encabezado + dias + '</table>';
}


  



function mostrarMesAnterior(){
    let mesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth() - 1, 1);
    fechaActual = mesAnterior;
    switch(event.target.id){
      case '1':
        calendario.innerHTML = generarCalendario(fechaActual);
      break;
      case '2':
        calendario1.innerHTML =generarCalendario(fechaActual);
      break;
      case '3':
        calendario2.innerHTML =generarCalendario(fechaActual);
      break;
      case '4':
        calendario3.innerHTML =generarCalendario(fechaActual); 
      break;
    }   
}

function mostrarMesSiguiente(){
let mesSiguiente = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 1);
fechaActual = mesSiguiente;
switch(event.target.id){
  case '1':
    calendario.innerHTML = generarCalendario(fechaActual);
  break;
  case '2':
    calendario1.innerHTML =generarCalendario(fechaActual);
  break;
  case '3':
    calendario2.innerHTML =generarCalendario(fechaActual);
  break;
  case '4':
    calendario3.innerHTML =generarCalendario(fechaActual); 
  break;
}   
}