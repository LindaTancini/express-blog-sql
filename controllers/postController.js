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

//  SHOW
function show(req, res) {
  const id = req.params.id;
  // QUERY POST
  const sql = "SELECT * FROM posts WHERE id = ?";
  // QUERY TAG
  const sqlTag = `SELECT *
  FROM
      tags
  JOIN post_tag ON tags.id = post_tag.tag_id
  WHERE post_tag.post_id = ?`;
  // ESEGUO LA QUERY
  connection.query(sql, [id], (err, results) => {
    if (err)
      return res.status(500).json({ error: "Ahia! La query al db è fallita" });
    if (results.length === 0)
      return res
        .status(404)
        .json({ error: "Ahia! Il post non è stato trovato" });
    //RECUPERIAMO IL TAG
    const post = results[0];
    //ESEGUO QUERY TAG
    connection.query(sqlTag, [id], (err, tagResults) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Ahia! La query al db è fallita" });
      post.tags = tagResults;
      res.json(post);
    });
  });
}

// ESPORTO LE FUNZIONI
module.exports = { index, show, destroy };
