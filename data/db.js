const mysql = require("mysql2");
/* CONNETTO IL MIO DB */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "booleanlinda",
  database: "blog_boolean",
});

/* ERRORE */
connection.connect((err) => {
  if (err) throw err;
  console.log("Sono connesso al db MySQL!");
});

/* ESPORTAZIONI */
module.exports = connection;
