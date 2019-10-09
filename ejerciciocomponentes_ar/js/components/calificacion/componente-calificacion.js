angular.
module('componentesApp'). // Nombre App
component('componenteCalificacion', { // nombre componente => para usarlo <componente-boton></componente-boton>
  templateUrl: './js/components/calificacion/template.html',
  bindings: {
    pnota: '@',
    
  },
  controller: function ComponenteCalificacionController() {
    console.trace('Calificacion Controller');
    const NOTA_MAX = 10;
    const NOTA_MIN = 0;
    this.suma = "+";
    this.resta = "-";
    this.nota = 0;
    this.calificacion = "";

    // Funciones
    this.$onInit = function() {
      console.trace('CalificacionController Init');

      this.nota = +this.pnota;
      this.ponerCalificacion();
    }

    this.subirNota = function () {
      console.trace('Funcion Subir Nota');

      if (this.nota < NOTA_MAX) {
        this.nota++;
      }
      this.ponerCalificacion();
    }

    this.bajarNota = function () {
      console.trace('Funcion Bajar Nota');

      if (this.nota > NOTA_MIN) {
        this.nota--;
      }
      this.ponerCalificacion();
    }

    this.ponerCalificacion = function () {

      console.trace('Funcion Poner Calificacion');

      switch (this.nota) {
        case 0:
          this.calificacion = "Suspenso";
          break;
        case 1:
          this.calificacion = "Insuficiente";
          break;
        case 2:
          this.calificacion = "Insuficiente";
          break;
        case 3:
          this.calificacion = "Insuficiente";
          break;
        case 4:
          this.calificacion = "Insuficiente";
          break;
        case 5:
          this.calificacion = "Suficiente";
          break;
        case 6:
          this.calificacion = "Bien";
          break;
        case 7:
          this.calificacion = "Notable";
          break;
        case 8:
          this.calificacion = "Notable";
          break;
        case 9:
          this.calificacion = "Sobresaliente";
          break;
        case 10:
          this.calificacion = "Sobresaliente";
          break;
        default:
          this.calificacion = "Error: nota no valida!";
      } // End Switch
    } // End Function
  } // End Controllador
});