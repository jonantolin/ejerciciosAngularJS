angular.module('universidadApp')  
    .controller('ControladorEjemplo', ['$scope', function($scope){

      console.log("entra en controlador ejemplo");

      $scope.frutasEjemplo = [
          {
            "nombre": "Manzana",
            "imagen": "img/manzana.jpg",
            "color": "Verde",
            "precio": 13,
            "cantidad": 0
          },
          {
            "nombre": "Fresa",
            "imagen": "img/fresa.jpg",
            "color": "Rojo",
            "precio": 9,
            "cantidad": 0
          },
          {
            "nombre": "Naranja",
            "imagen": "img/naranja.jpg",
            "color": "Naranja",
            "precio": 9.5,
            "cantidad": 0
          },
          {
            "nombre": "Platano",
            "imagen": "img/platano.jpg",
            "color": "Amarillo",
            "precio": 6.5,
            "cantidad": 0
          },
          {
            "nombre": "Mango",
            "imagen": "img/mango.jpg",
            "color": "Naranja",
            "precio": 13.75,
            "cantidad": 0
          },
          {
            "nombre": "Kiwi",
            "imagen": "img/kiwi.jpg",
            "color": "Marron",
            "precio": 7.5,
            "cantidad": 0
          },
          {
            "nombre": "Melocotón",
            "imagen": "img/melocoton.jpg",
            "color": "Naranja",
            "precio": 8.5,
            "cantidad": 0
          },
          {
            "nombre": "Pera",
            "imagen": "img/pera.jpg",
            "color": "Amarillo",
            "precio": 11,
            "cantidad": 0
          }
        ];

       
        

        $scope.colores = $scope.frutasEjemplo.map(elem => elem.color).filter( (v, i, a) =>{
           return a.indexOf(v)===i
        });


        $scope.precioTotal = $scope.frutasEjemplo.map(elem => elem.precio).reduce( (v, ac) => v+ac);
    }]);