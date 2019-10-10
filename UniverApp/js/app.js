var app = angular.module('universidadApp',['ngRoute', 'ngSanitize']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  
this.$onInit = function(){
    console.log('inicio main controller');

    /*$scope.alerta = {
        "texto" : "Ongi etorri",
        "clase" : "success"
    };*/    


    let url = "http://localhost:3000/tareas";

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


};

}]);
