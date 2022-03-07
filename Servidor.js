/* Se importan las librerias con las que va a trabajar el servidor*/
const express = require('express'); /* Express para la creación de la API */
const app = express(); /* Creación de la Aplicación */
const bodyParser = require('body-parser'); /* BodyParser para poder acceder de manera sencilla a los datos POST enviados por el usuario */

/* .use para especificar el directorio donde se encuentran los archivos estáticos del servidor */
app.use(express.static('./public'));

/* .set para establecer la ruta/directorio donde se van a encontrar los archivos para las peticiones, y además, se especifica su extensión, renderizar páginas con parámetros */
app.set('view engine', 'ejs');

/* Formato para recibir datos de formularios HTML de manera correcta */
app.use(bodyParser.urlencoded({ extended: false }));

/* Función para renderizar la página inicial del servidor, en caso de no enviar nada en la petición */
app.get('/', (req, res) => {
  res.render('index.ejs', { validacion: 'N' });
});

/* Funcion para renderizar al usuario, el estatus incorrecto o no encontrado, con la página Error404, en caso de que escriba un url o haga una petición que no se específico dentro del servidor */
app.get('*', function (req, res) {
  res.status(404);
  res.render('Error404.ejs');
});

/* Se establece el puerto de conexión del servidor en el localhost:5000, y se imprime un mensaje de conexión correcta al servidor */
app.listen(process.env.PORT || 3000, () => { console.log('Servidor Web Iniciado'); });
//app.set('port', process.env.PORT || 3000);
