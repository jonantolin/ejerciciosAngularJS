app.controller('CrudController', ['$scope', '$http', 'cancionProvider', function servicesController($scope, $http, cancionProvider){


    //Variables del scope del controlador
    $scope.titulo ="Ejercicio CRUD contra servicio REST en Java";
    

    let self = this;

    $scope.orden = "id";
    $scope.descendente = false;
    $scope.iconoOrden = "";   
    

    //Eventos

    this.$onInit = function(){
        console.trace('crudController onInit');


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

        $scope.alerta = null;

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

        if(confirm('¿Estás seguro de querer eliminar la canción?')){

            cancionProvider.eliminar(id).then(
                response => { //funcion arrow, exito success, llamada OK
                    console.debug("Llamada REST ok %o", response);
                    //$scope.canciones = response.data;
                    $scope.listar();
                    $scope.alerta = {'clase': 'success',
                                 'texto':'Canción eliminada'};
                },
                response =>{ //funcion fallo
                    console.warn("Llamada REST ERROR %o", response);
                }

            );

        }

    }

    $scope.nuevaCancion = function(){

        $scope.cancion = {'id': -1,
                          'nombre': ''};

        $scope.alerta = null;                  

    }

    $scope.crear = function(nombre){

        $scope.alerta = null;

        cancionProvider.crear(nombre).then(
            response => { //funcion arrow, exito success, llamada OK
                console.debug("Llamada REST ok %o", response);
                //$scope.canciones = response.data;
                $scope.alerta = {'clase': 'success',
                                 'texto':'Canción creada con éxito'};

                $scope.listar();
                $scope.cancion = null;
            },
            response =>{ //funcion fallo
                console.warn("Llamada REST ERROR %o", response);
                $scope.alerta = {'clase': 'danger',
                                 'texto':'Error, la canción ya existe'};
                                 
            }

        );

    }

    $scope.modificar = function(cancion){

        $scope.alerta = null;

            cancionProvider.modificar(cancion).then(
                response => { //funcion arrow, exito success, llamada OK
                    console.debug("Llamada REST ok %o", response);
                    //$scope.canciones = response.data;
                    $scope.listar();
                    $scope.alerta = {'clase': 'success',
                                 'texto':'Canción modificada con éxito'};
                    $scope.cancion = null;
                },
                response =>{ //funcion fallo
                    console.warn("Llamada REST ERROR %o", response);
                    $scope.alerta = {'clase': 'danger',
                                    'texto':'Error, la canción ya existe'};
                }

            ); 

    } //end modificar

    $scope.ordenar = function (campo){

        $scope.orden = campo;
        $scope.descendente = !$scope.descendente;

        if($scope.descendente){
            $scope.iconoOrden = "down";
        }else{
            $scope.iconoOrden = "up";
        }

    }



}]);