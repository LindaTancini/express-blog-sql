// IMPORTO L'ARRAY CON I POSTS
const posts = require("../data/posts.js");
const postsArray = require("../data/posts.js");

// OTTENGO TUTTI I POST, CREO FUNZIONE INDEX
function index(req, res) {
  // GENERO ERRORE 500
  //ahia.get();
  let filteredPosts = postsArray;
  if (req.query.tag) {
    filteredPosts = postsArray.filter((element) =>
      element.tags.includes(req.query.tag)
    );
  }
  res.json(filteredPosts);
}

//OTTENGO UN POST CERCANDO IL SUO ID, CREO FUNZIONE SHOW
function show(req, res) {
  const currentPostId = req.params.id;
  const currentPost = postsArray.find(
    (element) => element.id === parseInt(currentPostId)
  );
  // CONTROLLO SE L'ID ESISTE
  if (!currentPost) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  // Se il post esiste, restituisco il post
  res.json(currentPost);
}
//  ELIMINO UN POST CERCANDO IL SUO ID, CREO FUNZIONE DESTROY
function destroy(req, res) {
  const deletePostId = req.params.id;
  const deletePost = postsArray.find(
    (element) => element.id === parseInt(deletePostId)
  );
  // RIMUOVO IL POST CON SPLICE
  postsArray.splice(postsArray.indexOf(deletePost), 1);
  // CONTRO SE L'ID ESISTE
  if (!deletePost) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  // STAMPO LA LISTA SENZA IL CONTENUTO RIMOSSO
  console.log("Nuova lista:", postsArray);
  res.send(deletePost);
}

// CREO UN POSTO POST, CREO FUNZIONE STORE
function store(req, res) {
  console.log(req.body);
  // CREO UN NUOVO ID PER IL POST INCREMENTANDO L'ULTIMO ID
  const newId = posts[posts.length - 1].id + 1;
  // CREO UN NUOVO POST
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  // AGGIUNGO IL NUOVO POST CON PUSH
  posts.push(newPost);
  // CONTROLLO CHE TUTTO FUNZIONI CON CONSOLE.LOG
  console.log(posts);
  // RESTITUISCO LA STATUS ADEGUATO
  res.status(201).json(newPost);
}
// MODIFICO UN POST, CREO FUNZIONE UPDATE
function update(req, res) {
  const currentPostId = req.params.id;
  const modifyPost = postsArray.find(
    (element) => element.id === parseInt(currentPostId)
  );
  // CONTROLLO SE L'ID ESISTE
  if (!modifyPost) {
    return res.status(404).json({
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  // AGGIORNO I POST
  modifyPost.title = req.body.title;
  modifyPost.content = req.body.content;
  modifyPost.image = req.body.image;
  modifyPost.tags = req.body.tags;
  // CON CONSOLE.LOG CONTROLLO LA LISTA AGGIORNATA
  console.log(modifyPost);
  // POST MODIFICATO
  res.json(modifyPost);
}

// ESPORTO LE FUNZIONI
module.exports = { index, show, destroy, store, update };
