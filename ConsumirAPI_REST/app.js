import fetch
from "node-fetch";

//Consumiendo un servicio Api Rest de otra aplicación
//URL del servicio de notificaciones
//fetch('http://localhost:5000/')
//.then((response) => {
    //return response.text();
//})
//.then((resp) => {
    //console.log(resp);
//})

//let data_sms = {
    //telefono: 'numero telefono',
    //mensaje: 'contenido del mensaje',
//}
//let url_service_sms = 'http://localhost:5000/sms?telefono=' + data_sms.telefono + 'mensaje=' + data_sms.mensaje;

//fetch(url_service_sms)
//.then((response) => {
    //return response.text('El mensaje SMS se ha entregado correctamente');
//})
//.then((resp) => {
    //console.log(resp); 
//})

let data_correo = {
    email: 'direccion electronica',
    asunto: 'referencia del correo',
    mensaje: 'contenido del email'
}

let url_correo = 'http://localhost:5000/correo?email='+ data_correo.correo
 + 'asunto=' + data_correo.asunto + 'mensaje=' + data_correo.mensaje;

fetch(url_correo)
.then((response) => {
    return response.text('El email ha sido enviado correctamente');
})
.then((resp) => {
    console.log(resp);
})


