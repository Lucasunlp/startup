	class Movie {};








	const EventEmitter = require('events');

	class Movie extends EventEmitter {}


		Movie.on('event', () => {    
	  		console.log('an event occurred and it was saved!');
	  		array.push('event'); //Notifica que un evento ha ocurrido
		});
		Movie.emit('event');  // Activa el evento
		Movie.off('event',() => {

			console.log('an event was eliminated');
			array.pop('event');
		} );
		Movie.removeListener('event', callbackB);





		function play() {
	  		this.emit("Play", ('La película se está ejecutando'));
		}


		function resume() {
	  		this.emit("Resume", ('El resumen de la pelicula'));
		}

		function pause() {
	  		this.emit("Pause", ('La pelicula está pausada'));
		}

	