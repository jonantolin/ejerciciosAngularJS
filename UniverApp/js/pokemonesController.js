app.controller('pokemonesController', ['$scope', '$routeParams', 'PokemonProvider', 
function pokemonesController($scope, $routeParams, pokemonProvider){

    console.log('pokemonesController');
    
    this.$onInit = function(){
        console.trace('pokemonesController onInit');


        $scope.listar();


    } //end onInit

    
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



}]);