/* js para nuestra aplicacion */

var app = angular.module('fruteriaApp', //nombre de la app
                             [] // para injeccion de librerias
);


// Controladores

app.controller('frutasController', function($scope){

    $scope.mostrarPrecio = false;

    $scope.precioTotal = 0;
    $scope.precioTipoFruta = 0;

    $scope.campo = "";
    $scope.orden = false;
    $scope.simboloVisible = false;
    $scope.simboloOrden ="";

    //TODO arreglar los simbolitos de arriba y abajo, se podria con 6 variables, en vez de 2 como ahora


    $scope.frutas = {"frutas":[
        {
            "nombre" : "Manzana",
            "imagen" : "images/manzana.jpg",
            "color" : "Verde",
            "precio" : 13,
            "cantidad" : 0
        },
        {
            "nombre" : "Fresa",
            "imagen" : "images/fresa.jpg",
            "color" : "Rojo",
            "precio" : 9,
            "cantidad" : 0
        },
        {
            "nombre" : "Pera",
            "imagen" : "images/pera.jpg",
            "color" : "Amarillo",
            "precio" : 11,
            "cantidad" : 0
        }
    ]};



    $scope.sumarCantidad = function(fruta){

        fruta.cantidad++;
        $scope.mostrarPrecio = false;
       // $scope.calcularPrecio();

    }

    $scope.restarCantidad = function(fruta){

        if(fruta.cantidad > 0){
            fruta.cantidad--;
            $scope.mostrarPrecio = false;
        }
        

    }

    $scope.calcularPrecio = function(){

       $scope.precioTotal = 0;

        for(var i = 0; i < $scope.frutas.frutas.length; i++){

             

            var cantidadFruta = $scope.frutas.frutas[i].cantidad;
            var precioFrutaUnidad = $scope.frutas.frutas[i].precio;

            

            $scope.precioTipoFruta = cantidadFruta * precioFrutaUnidad;

            $scope.precioTotal += $scope.precioTipoFruta;
           
        }

        $scope.mostrarPrecio = true;
    }

    $scope.ordenar = function(columna){


        $scope.campo = columna;
        $scope.orden = !$scope.orden;

        $scope.simboloVisible = true;

        if($scope.orden){
            $scope.simboloOrden ="fa-sort-down";

        }else{
            $scope.simboloOrden ="fa-sort-up";

        }


    }

    
});


