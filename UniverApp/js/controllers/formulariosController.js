app.controller('formulariosController', ['$scope', function formulariosController($scope){



    $scope.datosForm = {};

    $scope.guardar_datos = function(valido) { //recibe $valid desde la view que indica si los datos pasan la validacion


        if(!valido){ // si no pasa la validacion, no hago nada, retorno nada
            return;
        }

        console.log('Ha pasado la validacion y los datos van al server...........');
    }


}]);