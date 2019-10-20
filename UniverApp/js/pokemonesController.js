app.controller('pokemonesController', ['$scope', 'pokemonProvider',  
function pokemonesController($scope, pokemonProvider){

    console.log('pokemonesController');
    
    this.$onInit = function(){
        console.trace('pokemonesController onInit');

        $scope.orden = "name";
        $scope.descendente = false;
        $scope.iconoOrden = "";

        $scope.viernes = "hoy es viernes";


        $scope.listar();

    } //end onInit



    $scope.listar = function(){

        pokemonProvider.listar().then(
            response => {
                console.debug("Llamada REST ok %o", response);
                $scope.pokemones = response; //ojo, no response.data, porque llega el array que queremos directamente
            },
            response =>{ 
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }

    $scope.ordenar = function(campo){

        $scope.orden = campo;
        $scope.descendente = !$scope.descendente;

        if($scope.descendente){
            $scope.iconoOrden = "down";
        }else{
            $scope.iconoOrden = "up";
        }

    }



}]);