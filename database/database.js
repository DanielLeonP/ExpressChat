const sqlite3 = require('sqlite3'); /* SQLite3 para la creación y manejo de la Base de Datos */

function conectar(){
  const db = new sqlite3.Database("./database/expressDB.db", (err) => {
    if (err) { /* En caso de que no se pueda conectar, se imprime el error en consola */
      console.log('No se puede conectar a la base de datos\n');
      console.log(err)
    } else { /* En caso de que si se pueda conectar, se imprime la validadción en consola */
      console.log('Conectado a la base de datos\n');
    }
  });
  return db;
};
module.exports = {
  "conectar": conectar
}