// CONNETTO IL DB
const connection = require("../data/db");

//  INDEX
function index(req, res) {
  // QUERY
  const sql = `SELECT * from posts`;
  //CONTROLLO SE FUNZIONA L'ERRORE
  //const sql = `SELECT * from postsssssss`;
  //ESEGUO LA QUERY
  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({ error: "Ahia! La query al db è fallita" });
    res.json(results);
  });
}

//  DESTROY
function destroy(req, res) {
  // QUERY
  const { id } = req.params;
  const sql = `DELETE FROM posts WHERE id = ?`;
  // ESEGUO LA QUERY
  connection.query(sql, [id], (err) => {
    if (err)
      return res
        .status(500)
        .json({ error: "Ahia! Hai fallito ad eliminare il post" });
    res.sendStatus(204);
  });
}

//OTTENGO UN POST CERCANDO IL SUO ID, CREO FUNZIONE SHOW
function show(req, res) {}

// ESPORTO LE FUNZIONI
module.exports = { index, show, destroy };
