function PokemonProvider($http, $q){


  console.log('entra PokemonProvider');
  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
  const q = $q.defer();

  this.listar = function(){
      let url = ENDPOINT;
      console.log('PokemonProvider listar' + ENDPOINT);
      return $http.get(url);

      //retornar promesa
  }

  this.detalle = function (nombrePokemon){
    let url = ENDPOINT + nombrePokemon;
    console.log('CancionProvider detalle');
    return $http.get(url);
  }  


}