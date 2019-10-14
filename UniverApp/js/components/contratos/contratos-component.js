angular.module('universidadApp')
    .component('contratosComponent', {

        templateUrl: "./js/components/contratos/contratos-template.html", 
        controller: function contratosController($scope, $http){

            let url = "http://localhost:3000/contratos";

            $http.get(url).then(function(response){

                $scope.contratos = response.data;
                $scope.pruebasES6();

              },function(response){

                console.warn("Fallo en la peticion get");
        
            });
    
    
            $scope.filtrarTip = function(campo){
    
                $scope.contratosPorNombre = $scope.contratos.filter((v) => v["TIPPRODUCT"] === campo); // tambien vale v.TIPPRODUCT
    
            }  
    
            $scope.obtenerCodContratos = function(){
    
              $scope.codContratos = $scope.contratos.filter(c => c['codContrat'] != null).map(c => {
                return {
                  //"codigo" : (c['codContrat']) + (c['digContrat']),
    
                  // .toString() hara fallar la funcion en el momento que encuentre un elemento sin codContrar y/o digContrat
                  "codigo" : (String(c['codContrat']) +"-"+ String(c['digContrat'])), //concateno el codContrat con el digContrat
                  "saldo" : c['SALCONTRAT'] / 100
                }
              });
    
            }
    
            $scope.obtenerContratosSituacion = function(){
   
              $scope.contratosSituacion = $scope.contratos.filter(c => {

                if(c.ACCIONES != undefined){

                  return c.ACCIONES.filter(ac => ac.clave == "SITUACION").length === 1; // PREGUNTAR por esta linea
                }else{

                  return false;
                }

              })


            }

            $scope.obtenerAcciones = function(){

              $scope.ejercicio4 = [...new Set( $scope.contratos.map( e => {
                if (e.ACCIONES){
                 //return e.ACCIONES.titulo
                    
                 return e.ACCIONES.map( v => 
                     { 
                         return  v.titulo 
                     });
                    
             } 
             }) )];


            }

            // https://overflowjs.com/posts/Map-Reduce-Filter-In-Javascript.html
            $scope.pruebasES6 = function(){

              var test = [
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 2, PlaceRef: "*00022", Component: "BAXI10R", SubLocCode: "KIT", BarCode:""},
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 3, PlaceRef: "*00011", Component: "ANR190", SubLocCode: "B1", BarCode: ""}
              ]

              //[...new Set blablabla] Set crea un array de valores únicos, ...new quiere de decir de long indeterminada, {id} del atributo id, el id que es el valor
              // .map(e => test.find(blabla)) en cada e (que es cada id) mete un valor que es, buscar en test el elemento en el que tomo el id y el valor es igual a e(el id sacado de antes)
              var uniq = [...new Set(test.map(({id}) => id))].map(e => test.find(({id}) => id == e));	
              console.log(uniq);


              const users = [
                {
                  id: 1,
                  name: "Jonathon Haley",
                  username: "Monte.Weber2",
                  email: "Daphne43@yahoo.com",
                  phone: "1-563-675-1857 x11708",
                  website: "carmela.net",
                  password: "hashed_password"
                },
                {
                  id: 2,
                  name: "Dean John",
                  username: "dd.1",
                  email: "deno@google.com",
                  phone: "1-123-543-1857 123212",
                  website: "dd.net",
                  password: "Dean_hashed_password"
                }];

           
                const hobbies = ['chess', 'pool'];
                const newUsers = users.map(u => ({...u, hobbies}));

                console.log(newUsers);

                const newUsers2 = users.map(u => u.id == 2? ({...u, name: 'te'}): u);

                console.log(newUsers2);




            } //end pruebasES6



        } // end controller
    });