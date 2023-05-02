const url = 'https://api.bluelytics.com.ar/v2/latest';

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('No se pudo obtener la información de las cotizaciones');
        }
    })
    .then(data => {
        // Aquí procesas los datos como quieras
        console.log(data);

        // Accede a las propiedades de la respuesta JSON y actualiza los elementos HTML con los valores correspondientes
        document.getElementById('dolar-oficial-compra').textContent += data.oficial.value_buy;
        document.getElementById('dolar-oficial-promedio').textContent += data.oficial.value_avg;
        document.getElementById('dolar-oficial-venta').textContent += data.oficial.value_sell;

        document.getElementById('dolar-blue-compra').textContent += data.blue.value_buy;
        document.getElementById('dolar-blue-promedio').textContent += data.blue.value_avg;
        document.getElementById('dolar-blue-venta').textContent += data.blue.value_sell;
    })
    .catch(error => console.error(error));

// Obtener la fecha y hora actual
let now = new Date();

// Formatear la fecha y hora actual
let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let fecha_hora_actual = now.toLocaleString('es-ES', options); // Puedes cambiar el idioma y las opciones de formato según tus preferencias

// Seleccionar el elemento HTML
let divHora = document.querySelector('#hora');

// Actualizar el contenido del elemento HTML con la fecha y hora actual
divHora.innerHTML = "*** Cotizaciones actualizadas a la fecha: " + fecha_hora_actual;