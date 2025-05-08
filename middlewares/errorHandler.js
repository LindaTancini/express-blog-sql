//CREO FUNZIONE PER ERRORE 500
function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: err.message,
    message: "Ahia!",
  });
}

//ESPORTO FUNZIONE
module.exports = errorHandler;
