function pokemonProvider($http, $q){


  console.log('entra PokemonProvider');
  const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964"; //existen 964 pokemones
  const ENDPOINT_DET = "https://pokeapi.co/api/v2/pokemon/";


  /**
   * Este metodo listar es excelente para entender la asincronia y el funcionamiento de las promesas.
   * Voy a comentarlo casi entero por si en un futuro lo necesito mirar.
   * El objetivo del ejercicio es obtener una lista de pokemones cada uno con sus datos.
   * La complejidad reside en que la API funciona de tal manera que al pedir todos los pokemones
   * solo te devuelve por cada uno su nombre y una ruta. Con esta ruta hacemos otra peticion para
   * obtener los datos de ese pokemon (peso, altura y mil cosas mas aparte del nombre). 
   * Por tanto estamos obligados a hacer tantas peticiones como pokemones nos devuelva 
   * la peticion inicial para tener nuestra lista. Todas estas peticiones suceden muy rapido, 
   * mucho mas rapido de que sean satisfechas (los datos sean devueltos) y el 
   * codigo sigue su curso, por eso tenemos que trabajar con promesas para tratar este comportamiento 
   * asincrono.
   * 
   *
   * Devolvera una promesa que en caso de exito contendra un array de pokemones con sus datos.
   * Los datos de cada pokemon hay que hacerlos en llamadas a la API individuales.
   */
  this.listar = function(){

    let pokemones = []; // array de pokemones que queremos devolver con la promesa
    let promesas = []; // array de promesas individuales de cada pokemon que nos sera util mas adelante

    let q = $q.defer(); // Esta es la promesa principal que sera devuelta: "Te prometo que te dare una lista de pokemones con sus detalles"

    $http.get(ENDPOINT).then( // promesa de pedir la lista inicial y que hacer cuando la promesa se cumpla
      response => {

        let listaPokemones = response.data.results; //.results porque en realidad los pokemones en la peticion estan dentro de un array llamado results

        // cada pokemon consta de nombre y url. Usare la url para obtener los datos de ese pokemon
        listaPokemones.forEach(pokemon => { // array.forEach(elElementoIndividual) =>{ cosas para hacer con el elemento  }
          
          /**
           * Guardo la promesa ANTES DE QUE SE CUMPLA (antes de que efectivamente retorne un resultado),
           * porque la ejecucion del codigo es mas rapida que lo que tardan las peticiones en devolver resultados, 
           * esta es LA CLAVE DE LA ASINCRONIA (que partes del codigo siguen su curso a su ritmo y otras esperan o continuan),
           * por eso las promesas se llaman asi, "promesas", y la razon de ser de su manejo
           */
          let promesa = $http.get(pokemon.url); // guardo la promesa individual
          promesas.push(promesa); // agrego la promesa al array de promesas que usare luego en $q.all

          promesa.then( // promesa de pedir los datos de ese pokemon y que hacer cuando se cumpla
            response => {

              // response.data contiene el pokemon
              pokemones.push(response.data); //relleno el array con los datos de un pokemon

            },
            response => {

              console.warn('la peticion al pokemon FALLO %o', response);

            }

          );

        }); //end foreach



      },
      response => {
        console.warn('fallo de peticion principal lista pokemones %o', response);
        q.reject('fallo de peticion principal lista pokemones');
      }

    ); //end llamada principal todos los pokemones

    /**
     * He hecho tantas promesas como pokemones devueltos por la promesa cumplida inicial.
     * Cuando se cumple cada promesa (al cumplirla me da los datos del pokemon) relleno el array de pokemones.
     * Si devolviera el array directamente aquí, lo devolvería vacio, porque LA EJECUCION DEL CODIGO
     * LLEGARIA A ESTA LINEA MUCHO ANTES de que se hubieran cumplido las promesas y por tanto de que hubiera
     * dado tiempo a rellenarse el array. Por eso uso el metodo $q.all() que espera a que las promesas se
     * hayan cumplido (y por tanto a que el array de pokemones este rellenado) y luego dentro de .then()
     * tengo garantizado que el conjunto de promesas esta cumplido. $q.all() es como hacer la promesa de que
     * "cumplire todas las promesas"
     */

    $q.all(promesas).then(
      response => {

        q.resolve(pokemones);

      },
      response => {

        q.reject('La promesa de cumplir todas las promesas ha fallado %o', response);
      }

    );  

    return q.promise;

  } //end listar



   

  this.detalle = function (nombrePokemon){
    let url = ENDPOINT_DET + nombrePokemon;
    console.log('CancionProvider detalle');
    return $http.get(url);
  }  


}