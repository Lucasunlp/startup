var config = {  
  writable: true,
  enumerable: true,
  configurable: true
};

var defineProperty = function(obj, name, value) {  
  config.value = value;
  Object.defineProperty(obj, name, config);
}

var movie = Object.create(null);  
defineProperty(movie, 'title', "Yehuda");  
defineProperty(movie, 'year',   "2010");
defineProperty(movie, 'duration',   "120");

var movie2 = Object.create(null);  
defineProperty(movie, 'title', "Rapido y Furioso 8");  
defineProperty(movie, 'year',   "2017");
defineProperty(movie, 'duration',   "150");



console.log(movie.title);


function play() {
  console.log("Pelicula iniciada .");
}

function resume() {
  console.log("Resumen de la pelicula.");
}

function pause() {
  console.log("La pelicula esta en pausa.");
}