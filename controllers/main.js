let resultado = heroes.fine (function (heroe) {

  return heroe.id == req.params.id  ;

})

if (resultado) {

  res.send();

} else {

  res.send('no lo encontre');

}


