//CREO FUNZIONE PER ERRORE 404
function notFound(req, res, next) {
  res.status(404).json({
    error: "Not Found",
    message: "Pagina non trovata, errore!",
  });
}

// ESPORTO FUNZIONE
module.exports = notFound;
