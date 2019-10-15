app.controller('CrudController', ['$scope', '$http', 'cancionProvider', function servicesController($scope, $http, cancionProvider){


    //Variables del scope del controlador
    $scope.titulo ="Ejercicio CRUD contra servicio REST en Java";
    
    
    
    $scope.canciones = [];

    //Eventos

    this.$onInit = function(){
        console.trace('crudController onInit');


        //TODO ponerlo donde sea necesario
        //cancionProvider.listar();
        //cancionProvider.detalle(1);
        //cancionProvider.eliminar(2);
        //cancionProvider.crear("Pepe");
        //cancionProvider.modificar(1, "cambiada cancion 1");

        //Llamada al servicio REST, TODO encapsular en un provider

        $scope.listar();


    } //end onInit

    $scope.listar = function(){

        cancionProvider.listar().then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.canciones = response.data;
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }

    $scope.detalle = function(id){

        cancionProvider.detalle(id).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                $scope.cancion = response.data;
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }

    $scope.eliminar = function(id){

        cancionProvider.eliminar(id).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                //$scope.canciones = response.data;
                $scope.listar();
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }

    $scope.crear = function(nombre){

        cancionProvider.crear(nombre).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                //$scope.canciones = response.data;
                $scope.listar();
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }

    $scope.modificar = function(cancion){

        cancionProvider.modificar(cancion).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                //$scope.canciones = response.data;
                $scope.listar();
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }



}]);