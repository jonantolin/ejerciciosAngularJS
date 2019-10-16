var app = angular.module('universidadApp',['ngRoute', 'ngSanitize']);

/**
 * Servicio para Constantes
 */

app.constant("servicioConstantes", {"titulo": "AngularApp",
                                    "idioma": "es-ES",
                                    "version": "1.0",
                                    "autor": "Jon Antolin",
                                    "github": "https://github.com/jonantolin/ejerciciosAngularJS" });


/**
 * Ejemplo servicios 
 */

function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}
 
app.service("rectanguloService",Rectangulo);


//Ahora vamos ha hacer el ejemplo pero con los valores iniciales que queramos
function Rectangulo2(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

// Lo siguiente es hacer que haya un servicio value que contenga el tamaño inicial del rectángulo.

app.value("tamanyoInicialRectangulo",{
  ancho:2,
  alto:3
});

// Y ahora nos queda inyectar el value “tamanyoInicialRectangulo” en el constructor de “Rectangulo” y AngularJS por suerte ya tiene esa funcionalidad programada
app.service("rectangulo2",['tamanyoInicialRectangulo',Rectangulo2]);

// Providers

app.service('cancionProvider', CancionProvider);

