/**
 * Controlador Principal
 */
app.controller('mainCtrl', ['$scope','$http', 'servicioConstantes', 'rectanguloService', function($scope,
    $http,
    servicioConstantes,
    rectanguloService){


this.$onInit = function(){
    console.log('inicio main controller');

    /*$scope.alerta = {
    "texto" : "Ongi etorri",
    "clase" : "success"
    };*/    

    $scope.constantes = servicioConstantes;

    $scope.viernes = "hoy es viernes";

    $scope.dineroPrueba = 78.95;

    let url = "http://localhost:3000/";

    $http.get(url).then(function(response){

        console.trace('servicio rest funcionando %o', response);
        /*$scope.alerta = {
        "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
        "clase" : "success"
        };
        */

        },function(response){

        console.warn('servicio rest fallando %o', response);
        $scope.alerta = {
        "texto" : "<strong>Upssssss</strong> Servicio Rest parado",
        "clase" : "danger"
        };
    });


}; // end $onInit

/*

*/

}]);
