function PokemonProvider($http, $q){


    console.log('entra PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const q = $q.defer();
    const q2 = $q.defer(); //promesa interna
  
    let pokemones = [];
    let arrayPromesas = [];
  
    this.listar = function(){
        let url = ENDPOINT;
        console.log('PokemonProvider listar' + ENDPOINT);
  
        recogerDatosIniciales().then(
          response => {
              //aqui el for que hara una llamada a detalle en cada iteracion
              console.log('respuesta correcta listado pokemonProvider');
  
              response.data.results.forEach(element => {

                $http.get(element.url).then(
                  resultado => { //recibe 1 pokemon
  
                    console.log('pokemon CORRECTO');
                    q2.resolve(resultado.data);
                    pokemones.push(resultado.data);
  
                  },
                  resultado => {
  
                    console.log('pokemon FALLIDO');
                    q2.reject('pokemon fallido');
     
                  }
  
                );
  
               // pokemones.push(q2.promise);
  
                arrayPromesas.push(q2.promise);
                
              }); //end foreach


              //for(i = 0; i < (response.data.results).length; i++){
  
             // } //end for
  
              $q.all(arrayPromesas).then(
                response => {
  
                  q.resolve(pokemones);
  
                },
                response =>{
  
                  q.reject('algo fallo');
  
                }
  
              );
             
          },
          response =>{ 
              console.warn("Llamada REST ERROR %o", response);
              q.reject('fallo la peticion');
          });
  
  
  
          return q.promise;
        //retornar promesa
    }
  
    var recogerDatosIniciales = function(){
      let url = ENDPOINT;
      return $http.get(url);
    }    
  
     
  
    this.detalle = function (nombrePokemon){
      let url = ENDPOINT + nombrePokemon;
      console.log('CancionProvider detalle');
      return $http.get(url);
    }  
  
  
  }