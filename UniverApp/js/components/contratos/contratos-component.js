angular.module('universidadApp')
    .component('contratosComponent', {

        templateUrl: "./js/components/contratos/contratos-template.html", 
        controller: function contratosController($scope, $http){

            let url = "http://localhost:3000/contratos";

            $http.get(url).then(function(response){

                $scope.contratos = response.data;

              },function(response){

                console.warn("Fallo en la peticion get");
        
            });
    
    
            $scope.filtrarTip = function(campo){
    
                $scope.contratosPorNombre = $scope.contratos.filter((v) => v["TIPPRODUCT"] === campo);
    
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
    
              // let contratosJSON =JSON.stringify($scope.contratos);
    
              let contratosAcciones = $scope.contratos.filter(c => c['ACCIONES'] != null); // Los contratos que tienen clave 'ACCIONES'
    
              // TODO esta mal, REVISAR

             $scope.contratosSituacion = contratosAcciones.filter(c => {
                return c['ACCIONES'].filter(accion => {
                  return accion['clave'] === 'SITUACION'
                  })
              });
    
              // $scope.contratosSituacion = contratosAcciones.filter(c => JSON.parse(c['ACCIONES']).clave === 'SITUACION'));

            }



        } // end controller
    });