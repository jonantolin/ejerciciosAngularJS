app.controller('pokemonesController', ['$scope', '$routeParams', 'PokemonProvider', 
function pokemonesController($scope, $routeParams, pokemonProvider){

    console.log('pokemonesController');
    
    this.$onInit = function(){
        console.trace('pokemonesController onInit');


        $scope.listar();

        $scope.orden = "id";
        $scope.descendente = false;
        $scope.iconoOrden = "";

        $scope.viernes = "hoy es viernes";


    } //end onInit

    /*
    $scope.listar = function(campo){

        pokemonProvider.listar().then(
            response => {
                console.debug("Llamada REST ok %o", response);
                $scope.pokemones = response.data.results;
            },
            response =>{ 
                console.warn("Llamada REST ERROR %o", response);
            }

        );

    }
    */

    $scope.listar = function(){

        pokemonProvider.listar().then(
            response => {
                console.debug("Llamada REST ok %o", response);
                $scope.pokemones = response.data.results;
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