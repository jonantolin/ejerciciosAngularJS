angular.
module('componentesApp'). // Nombre App
component('componenteBoton', { // nombre componente => para usarlo <componente-boton></componente-boton>
  templateUrl: './js/components/boton/template.html',
  controller: function ComponenteBotonController() {
    console.trace('Boton Controller');
    this.nombre = "Más Uno";
    this.contador = 0;

    // Funciones
    this.masuno = function () {
      console.trace('Mas Uno');
      this.contador++;
    }
  }
});