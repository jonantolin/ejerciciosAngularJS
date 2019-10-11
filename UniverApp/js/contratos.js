angular.module('universidadApp')  
    .controller('ControladorContratos', ['$scope', '$http', function($scope, $http){

      console.log("entra en controlador ejemplo");

      let url = "http://localhost:3000/contratos";

       $scope.contratos = [];


       this.$onInit = function(){


        $http.get(url).then(function(response){

            $scope.contratos = response.data;
    
            
            
    
          },function(response){
    
    
            console.warn("Fallo en la peticion get");
    
          });


        $scope.filtrarTip = function(campo){

            $scope.contratosPorNombre = $scope.contratos.filter((v, i, a) => v["TIPPRODUCT"] === campo);


        }  


       }

      

     



      //$scope.filtrarTipo(nombreTipo){

       

      //} 

     

    }]);