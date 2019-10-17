app.controller('pokemonController', ['$scope', '$routeParams', 'PokemonProvider', 
function pokemonController($scope, $routeParams, pokemonProvider){


    console.trace('pokemonController entra');

    let nombre = $routeParams.nombre;

    this.$onInit = function(){

        console.trace('pokemon Init');
        $scope.detalle();

    }

    $scope.detalle = function(){

        pokemonProvider.detalle(nombre).then(
            response => {
                console.debug("Llamada REST ok %o", response);
                $scope.pokemon = response.data;


            },
            response =>{ 
                console.warn("Llamada REST ERROR %o", response);
            }
    
        );

    }

}]);