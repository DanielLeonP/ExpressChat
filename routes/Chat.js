const express = require("express");
const router = express.Router();

/* Función para eliminar mensajes del usuario en cuestión */
router.get('/EliminarMensaje/:IdMensaje', function (req, res) {
  var IdMensaje = req.params.IdMensaje; /* Variable para seleccioanr el mensaje que se desea eliminar */
  sql = 'DELETE FROM Mensajes WHERE IdMensaje = ?;'; /* Se elimina el mensaje con un id específico */
  db.run(sql, [IdMensaje], (err, result) => {
    if (err) { /* En caso de que la consulta falle, se regresa un estatus de error y se imprime la falla */
      res.status(400).json({ "error": err.message });
      return;
    } else { /* De otra forma se manda un estatus correcto y se redirige a la misma página con el mensaje ya eliminado */
      res.status(200);
      res.redirect(req.get('referer'));
    }
  });
});

/* Función para modificar el texto de un mensaje en específico del usuario en cuestión */
router.get('/ModificarMensaje/:IdMensaje', function (req, res) {
  /* Variables para seleccionar el mensaje que se debe modificar y el texto nuevo */
  var IdMensaje = req.params.IdMensaje;
  var Texto = req.query.TextoMensajeModificar
  sql = "UPDATE Mensajes SET Texto = ? WHERE IdMensaje= ?"; /* Se modifica el texto de un mensaje en específico */
  db.run(sql, [Texto, IdMensaje], (err, result) => {
    if (err) { /* En caso de que la consulta falle, se regresa un estatus de error y se imprime la falla */
      res.status(400).json({ "error": err.message });
      return;
    } else { /* De otra forma se manda un estatus correcto y se redirige a la misma página con el mensaje ya modificado */
      res.status(200);
      res.redirect(req.get('referer'));
    }
  });
});

/* Función para eliminar chats del usuario en cuestión */
router.get('/EliminarChat/:IdChat', function (req, res) {
  var IdChat = req.params.IdChat; /* Variable para seleccioanr el chat que se desea eliminar */
  sql = 'DELETE FROM Chats WHERE IdChat = ?;'; /* Se elimina el chat con un id específico */
  db.run(sql, [IdChat], (err, result) => {
    if (err) { /* En caso de que la consulta falle, se regresa un estatus de error y se imprime la falla */
      res.status(400).json({ "error": err.message });
      return;
    } else { /* De otra forma se redirige a la página principal donde se encuentran todos los demas chats, que aun tiene el usaurio en cuestión */
      res.status(200);
      res.redirect('/ExpressChat');
    }
  });
});

/* Función para modificar el nombre de un chat en específico del usuario en cuestión */
router.get('/ModificarChat/:IdChat', function (req, res) {
  /* Variables para seleccionar el chsat que se debe modificar y el nombre nuevo */
  var IdChat = req.params.IdChat;
  var Texto = req.query.TextoChatModificar
  sql = "UPDATE Chats SET NombreChat = ? WHERE IdChat= ?"; /* Se modifica el nombre de un chat en específico */
  db.run(sql, [Texto, IdChat], (err, result) => {
    if (err) { /* En caso de que la consulta falle, se regresa un estatus de error y se imprime la falla */
      res.status(400).json({ "error": err.message });
      return;
    } else { /* De otra forma se manda un estatus correcto y se redirige a la misma página con el nuevo nombre del chat */
      res.status(200);
      res.redirect(req.get('referer'));
    }
  });
});



module.exports = router;