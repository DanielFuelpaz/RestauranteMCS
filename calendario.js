let fechaActual = new Date();

const heading1 = document.getElementById("titulo_Poke");
const text = heading1.textContent;

const colors = [
  "red", "blue", "green", "orange", "purple", "brown",
  "teal", "maroon", "navy", "olive", "fuchsia", "aqua",
  "lime", "silver", "black", "gray", "rgb(204, 153, 102)"
];

heading1.innerHTML = "";

for (let i = 0; i < text.length; i++) {
  const letter = text[i];
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.color = colors[i % colors.length];

  heading1.appendChild(span);
}



let calendario = document.getElementById('calendario');
let calendario1 = document.getElementById('calendario1');
let calendario2 = document.getElementById('calendario2');
let calendario3 = document.getElementById('calendario3');
let nombreR = "";
let numPersonas = 0;
let contenidoCelda = "";
let mesAnioEscogido = "";
let celdas = "";
let celdas1 = "";
let celdas2 = "";
let celdas3 = "";
let fechaReservaParseada = null;
let ventana;
let popUpForm = document.getElementById("popUp");
let btnConfirmar = document.getElementById("btnConfirmar");
let ciudad;
let botonReserva1 = document.getElementById('reservarbtn1');
let botonReserva2 = document.getElementById('reservarbtn2');
let botonReserva3 = document.getElementById('reservarbtn3');
let botonReserva4 = document.getElementById('reservarbtn4');


let selectPersona1 = document.getElementById('selectPersonas1');
let selectPersona2 = document.getElementById('selectPersonas2');
let selectPersona3 = document.getElementById('selectPersonas3');
let selectPersona4 = document.getElementById('selectPersonas4');

let selectHora1 = document.getElementById('selectHora1');
let selectHora2 = document.getElementById('selectHora2');
let selectHora3 = document.getElementById('selectHora3');
let selectHora4 = document.getElementById('selectHora4');
let sucursalesboton = document.getElementById('sucursalesBoton');
let seccionSucursales = document.getElementById('sucursales');
let sucursalCiudad = document.getElementById('sucursalCiudadBoton');
seccionSucursales.style.display='none';
let mensajeCiudad= document.getElementById('mensajeNo');
mensajeCiudad.style.display='none';

sucursalesboton.addEventListener('click',function(){
  seccionSucursales.style.display='block';
  mensajeCiudad.style.display='none';
  reservaQuito.style.display='block';
    reservaCuenca.style.display='block';
    reservaBanios.style.display='block';
    reservaAmbato.style.display='block';

})

if (typeof navigator.geolocation == 'object') {
  navigator.geolocation.getCurrentPosition(obtenerCiudad);
}

function obtenerCiudad(posicion) {
  let latitud = posicion.coords.latitude;
  let longitud = posicion.coords.longitude;

  let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitud}&lon=${longitud}`;

  $.getJSON(url, function(response) {
    ciudad = response.address.city || response.address.town || response.address.village || response.address.hamlet;
  });
}
let reservaAmbato = document.getElementById("Ambato");
let reservaQuito = document.getElementById("Quito");
let reservaCuenca = document.getElementById("Cuenca");
let reservaBanios = document.getElementById("Banios");

sucursalCiudad.addEventListener('click',function(){
  switch(ciudad.toString()){
    case 'Ambato':
    seccionSucursales.style.display='block';
    reservaQuito.style.display='none';
    reservaCuenca.style.display='none';
    reservaBanios.style.display='none';
    break;
    case 'Quito':
      seccionSucursales.style.display='block';
      reservaAmbato.style.display='none';
      reservaCuenca.style.display='none';
      reservaBanios.style.display='none';
    break;
    case 'Cuenca':
      seccionSucursales.style.display='block';
    reservaQuito.style.display='none';
    reservaAmbato.style.display='none';
    reservaBanios.style.display='none';
    break;
    case 'Baños':
      seccionSucursales.style.display='block';
    reservaQuito.style.display='none';
    reservaCuenca.style.display='none';
    reservaAmbato.style.display='none';
    break;
    default:
      mensajeCiudad.style.display='block';
    break;
  }
})

document.addEventListener("DOMContentLoaded", function () {

  calendario.innerHTML = generarCalendario(fechaActual);
  calendario1.innerHTML = generarCalendario(fechaActual);
  calendario2.innerHTML = generarCalendario(fechaActual);
  calendario3.innerHTML = generarCalendario(fechaActual);
  celdas = calendario.querySelectorAll('td');
  celdas1 = calendario1.querySelectorAll('td');
  celdas2 = calendario2.querySelectorAll('td');
  celdas3 = calendario3.querySelectorAll('td');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas1[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas2[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas3[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
});
function generarCalendario(fecha) {
  let diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  let nombreMes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();

  let encabezado = '<tr><th id="tableHeader" class="tableHeaders" colspan="7">' + nombreMes + ' ' + anio + '</th></tr><tr>';
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
  let tds = document.getElementsByTagName('td');
  let tdSeleccionado = null;
  for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function () {
      if (tdSeleccionado) {
        tdSeleccionado.classList.remove('selected');
      }
      this.classList.add('selected');
      tdSeleccionado = this;
    });
  }

  return '<table>' + encabezado + dias + '</table>';
}

function mostrarMesAnterior() {
  let mesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth() - 1, 1);
  fechaActual = mesAnterior;
  switch (event.target.id) {
    case '1':
      calendario.innerHTML = generarCalendario(fechaActual);
      break;
    case '2':
      calendario1.innerHTML = generarCalendario(fechaActual);
      break;
    case '3':
      calendario2.innerHTML = generarCalendario(fechaActual);
      break;
    case '4':
      calendario3.innerHTML = generarCalendario(fechaActual);
      break;
  }
  celdas = calendario.querySelectorAll('td');
  celdas1 = calendario1.querySelectorAll('td');
  celdas2 = calendario2.querySelectorAll('td');
  celdas3 = calendario3.querySelectorAll('td');

  for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas1[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas2[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas3[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
}

function mostrarMesSiguiente() {
  let mesSiguiente = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 1);
  fechaActual = mesSiguiente;
  switch (event.target.id) {
    case '1':
      calendario.innerHTML = generarCalendario(fechaActual);
      break;
    case '2':
      calendario1.innerHTML = generarCalendario(fechaActual);
      break;
    case '3':
      calendario2.innerHTML = generarCalendario(fechaActual);
      break;
    case '4':
      calendario3.innerHTML = generarCalendario(fechaActual);
      break;
  }
  celdas = calendario.querySelectorAll('td');
  celdas1 = calendario1.querySelectorAll('td');
  celdas2 = calendario2.querySelectorAll('td');
  celdas3 = calendario3.querySelectorAll('td');

  for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas1[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas2[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }
  for (let i = 0; i < celdas.length; i++) {
    celdas3[i].addEventListener('click', function () {
      contenidoCelda = this.innerHTML;
    });
  }

}
botonReserva1.addEventListener('click', function () {
  mesAnioEscogido = calendario.querySelector('th').innerHTML;
  let numComienzoAnio = mesAnioEscogido.indexOf(2) - 1;
  let mesEscogido = mesAnioEscogido.substring(0, numComienzoAnio);
  let anioEscogido = mesAnioEscogido.substring(numComienzoAnio, mesAnioEscogido.length);
  let mesEnNumero = 0;
  switch (mesEscogido) {
    case "Enero":
      mesEnNumero = 1;
      break;
    case "Febrero":
      mesEnNumero = 2;
      break;
    case "Marzo":
      mesEnNumero = 3;
      break;
    case "Abril":
      mesEnNumero = 4;
      break;
    case "Mayo":
      mesEnNumero = 5;
      break;
    case "Junio":
      mesEnNumero = 6;
      break;
    case "Julio":
      mesEnNumero = 7;
      break;
    case "Agosto":
      mesEnNumero = 8;
      break;
    case "Septiembre":
      mesEnNumero = 9;
      break;
    case "Octubre":
      mesEnNumero = 10;
      break;
    case "Noviembre":
      mesEnNumero = 11;
      break;
    case "Diciembre":
      mesEnNumero = 12;
      break;
  }
  nombreR = document.getElementById('pokeAmbato').innerText;
  fechaReserva = anioEscogido + "/" + mesEnNumero + "/" + contenidoCelda;
  let cantidadHorasSeleccionada = selectHora1.value;
  let horas = cantidadHorasSeleccionada.substring(0, cantidadHorasSeleccionada.indexOf(":"));
  fechaReservaParseada = new Date(fechaReserva);
  if (fechaReservaParseada < fechaActual) {
    alert("La fecha debe ser mayor o igual a la actual");
  }
  else {
    fechaReservaParseada.setHours(horas);
    let cantidadPersonasSeleccionada = selectPersona1.value;
    numPersonas = cantidadPersonasSeleccionada.substring(0, cantidadPersonasSeleccionada.indexOf(" "));
    popUpForm.style.display = 'block';
  }
});

botonReserva2.addEventListener('click', function () {
  nombreR = document.getElementById('pokeQuito').innerText;
  mesAnioEscogido = calendario1.querySelector('th').innerHTML;
  let numComienzoAnio = mesAnioEscogido.indexOf(2) - 1;
  let mesEscogido = mesAnioEscogido.substring(0, numComienzoAnio);
  let anioEscogido = mesAnioEscogido.substring(numComienzoAnio, mesAnioEscogido.length);
  let mesEnNumero = 0;
  switch (mesEscogido) {
    case "Enero":
      mesEnNumero = 1;
      break;
    case "Febrero":
      mesEnNumero = 2;
      break;
    case "Marzo":
      mesEnNumero = 3;
      break;
    case "Abril":
      mesEnNumero = 4;
      break;
    case "Mayo":
      mesEnNumero = 5;
      break;
    case "Junio":
      mesEnNumero = 6;
      break;
    case "Julio":
      mesEnNumero = 7;
      break;
    case "Agosto":
      mesEnNumero = 8;
      break;
    case "Septiembre":
      mesEnNumero = 9;
      break;
    case "Octubre":
      mesEnNumero = 10;
      break;
    case "Noviembre":
      mesEnNumero = 11;
      break;
    case "Diciembre":
      mesEnNumero = 12;
      break;
  }

  fechaReserva = anioEscogido + "/" + mesEnNumero + "/" + contenidoCelda;
  let cantidadHorasSeleccionada = selectHora2.value;
  let horas = cantidadHorasSeleccionada.substring(0, cantidadHorasSeleccionada.indexOf(":"));
  let fechaReservaParseada = new Date(fechaReserva);
  fechaReservaParseada.setHours(horas);
  let cantidadPersonasSeleccionada = selectPersona2.value;
  numPersonas = cantidadPersonasSeleccionada.substring(0, cantidadPersonasSeleccionada.indexOf(" "));
  popUpForm.style.display = 'block';
});
botonReserva3.addEventListener('click', function () {
  nombreR = document.getElementById('pokeCuenca').innerText;
  mesAnioEscogido = calendario2.querySelector('th').innerHTML;
  let numComienzoAnio = mesAnioEscogido.indexOf(2) - 1;
  let mesEscogido = mesAnioEscogido.substring(0, numComienzoAnio);
  let anioEscogido = mesAnioEscogido.substring(numComienzoAnio, mesAnioEscogido.length);
  let mesEnNumero = 0;
  switch (mesEscogido) {
    case "Enero":
      mesEnNumero = 1;
      break;
    case "Febrero":
      mesEnNumero = 2;
      break;
    case "Marzo":
      mesEnNumero = 3;
      break;
    case "Abril":
      mesEnNumero = 4;
      break;
    case "Mayo":
      mesEnNumero = 5;
      break;
    case "Junio":
      mesEnNumero = 6;
      break;
    case "Julio":
      mesEnNumero = 7;
      break;
    case "Agosto":
      mesEnNumero = 8;
      break;
    case "Septiembre":
      mesEnNumero = 9;
      break;
    case "Octubre":
      mesEnNumero = 10;
      break;
    case "Noviembre":
      mesEnNumero = 11;
      break;
    case "Diciembre":
      mesEnNumero = 12;
      break;
  }

  fechaReserva = anioEscogido + "/" + mesEnNumero + "/" + contenidoCelda;
  let cantidadHorasSeleccionada = selectHora3.value;
  let horas = cantidadHorasSeleccionada.substring(0, cantidadHorasSeleccionada.indexOf(":"));
  fechaReservaParseada = new Date(fechaReserva);
  fechaReservaParseada.setHours(horas);
  let cantidadPersonasSeleccionada = selectPersona3.value;
  numPersonas = cantidadPersonasSeleccionada.substring(0, cantidadPersonasSeleccionada.indexOf(" "));
  popUpForm.style.display = 'block';
});
botonReserva4.addEventListener('click', function () {
  nombreR = document.getElementById('pokeBanios').innerText;
  mesAnioEscogido = calendario3.querySelector('th').innerHTML;
  let numComienzoAnio = mesAnioEscogido.indexOf(2) - 1;
  let mesEscogido = mesAnioEscogido.substring(0, numComienzoAnio);
  let anioEscogido = mesAnioEscogido.substring(numComienzoAnio, mesAnioEscogido.length);
  let mesEnNumero = 0;
  switch (mesEscogido) {
    case "Enero":
      mesEnNumero = 1;
      break;
    case "Febrero":
      mesEnNumero = 2;
      break;
    case "Marzo":
      mesEnNumero = 3;
      break;
    case "Abril":
      mesEnNumero = 4;
      break;
    case "Mayo":
      mesEnNumero = 5;
      break;
    case "Junio":
      mesEnNumero = 6;
      break;
    case "Julio":
      mesEnNumero = 7;
      break;
    case "Agosto":
      mesEnNumero = 8;
      break;
    case "Septiembre":
      mesEnNumero = 9;
      break;
    case "Octubre":
      mesEnNumero = 10;
      break;
    case "Noviembre":
      mesEnNumero = 11;
      break;
    case "Diciembre":
      mesEnNumero = 12;
      break;
  }

  fechaReserva = anioEscogido + "/" + mesEnNumero + "/" + contenidoCelda;
  let cantidadHorasSeleccionada = selectHora4.value;
  let horas = cantidadHorasSeleccionada.substring(0, cantidadHorasSeleccionada.indexOf(":"));
  fechaReservaParseada = new Date(fechaReserva);
  fechaReservaParseada.setHours(horas);
  let cantidadPersonasSeleccionada = selectPersona4.value;
  numPersonas = cantidadPersonasSeleccionada.substring(0, cantidadPersonasSeleccionada.indexOf(" "));
  popUpForm.style.display = 'block';
});


function validarTexto(input) {
  var inputValue = input.value;
  var onlyLettersRegex = /^[A-Za-z]+$/;

  if (!onlyLettersRegex.test(inputValue)) {
    input.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
}
function validarEmail(emailValue) {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(emailValue)) {
    return false;
  }
  return true;
}

function validarNumero(phoneValue) {

  if (phoneValue.length !== 10 || isNaN(phoneValue)) {
    return false;
  }
  return true;
}

let btnCancelar = document.getElementById('btnCancelar');
btnCancelar.addEventListener('click', async function(){
  popUpForm.style.display='none';
});

  btnConfirmar.addEventListener('click', async function(){
    let cedulaCliente=0;
    let  IDRestaurante="";
    let nombre= document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    if(nombre!==""&&apellido!==""&&email!==""&&telefono!==""){
      if(!validarEmail(email)){
        alert("Ingresa un correo electrónico válido");
        return;
      }
      if(!validarNumero(telefono)){
        alert("Ingresa un número de celular válido")
        return;
      }
      const nuevoCliente = {
        NOM_CLI: nombre,
        APE_CLI: apellido,
        TEL_CLI: telefono,
        COR_CLI:email
      };
      let existe=false;
      let reser=true;
      const responser = await fetch('http://localhost:3000/clientes');
          if (responser.ok) {
            const responserData = await responser.json();
            for (let i = 0; i < responserData.length; i++) {
              let registro = responserData[i];
              if (registro.COR_CLI == email) {
                let resultado = confirm("¿Ya existe el usuario, deseas reservar con los datos del usuario ya existentes?");
                existe=true;
                if (resultado) {
                  reser=true;
                } else {
                  reser=false; 
                }
              }
            }
          } else {
            throw new Error('Error al crear el cliente');
          }
          if(!existe){
            try {
                    const response = await fetch('http://localhost:3000/clientes', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(nuevoCliente)
                    });
                
                    if (response.ok) {
                      const data = await response.json();
                      alert('Cliente creado exitosamente');
                    } else {
                      throw new Error('Error al crear el cliente');
                    }
                    }catch (error) {
                      console.error(error);
                    }
          }
            if(reser){
                    const response2 = await fetch('http://localhost:3000/clientes');
                    if (response2.ok) {
                      const response2Data = await response2.json();
                      for (let i = 0; i < response2Data.length; i++) {
                        let registro = response2Data[i];
                        if (registro.COR_CLI == email) {
                          cedulaCliente = registro.CED_CLI;
                          break;
                        }
                      }
              
                      const response3 = await fetch('http://localhost:3000/restaurantes');
                      if (response3.ok) {
                        const response3Data = await response3.json();
                        for (let i = 0; i < response3Data.length; i++) {
                          let registro2 = response3Data[i];
                          if (registro2.NOM_RES == nombreR) {                            
                            IDRestaurante = registro2.ID_RES;
                            break;
                          }
                        }
                            const nuevaReserva = {
                          FEC_HOR_RES: fechaActual,
                          FEC_HOR_LLE: fechaReservaParseada,
                          CAN_PER:numPersonas,
                          CED_CLI_RES:cedulaCliente, 
                          ID_RES_PER: IDRestaurante
                        };
          
                        fetch('http://localhost:3000/reservas', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(nuevaReserva)
                        })
                          .then(function(response) {
                            if (response.ok) {
                              return response.json();
                            } else {
                              throw new Error('Error al crear la reserva');
                            }
                          })
                          .then(function(data) {
                            alert('Reserva creada con éxito');
                            popUpForm.style.display='none';
                            document.getElementById('nombre').value=" ";
                            document.getElementById('apellido').value=" ";
                            document.getElementById('email').value=" ";
                            document.getElementById('telefono').value=" ";
                          })
                          .catch(function(error) {
                            console.error(error);
                            alert('Error al crear la reserva');
                          });     
                      } else {
                        console.error('Error:', response3.status);
                      }
                    } else {
                      console.error('Error:', response2.status);
                    }
                   }else
                  {
                    alert("Ingresa otro correo")
                  }
                }else{
                  alert("Ingrese todos los datos correctamente");
                  return;
              }
        
      });
  
  //Mejorar como se muestra el mensaje de exito o de fracaso.