// IMPORTO EXPRESS
const express = require("express");
// CREO IL ROUTER
const router = express.Router();
//IMPORTO LE FUNZIONI
const postControlls = require("../controllers/postController.js");
//ESPORTO IL ROUTER
module.exports = router;

// CRUD
// INDEX -> visualizzo tutti i posts
router.get("/", postControlls.index);
// SHOW -> visualizzo un solo post
router.get("/:id", postControlls.show);
// DESTROY -> cancello un post
router.delete("/:id", postControlls.destroy);
