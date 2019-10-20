app.controller('detalleController', ['$scope', '$routeParams', function detalleCtrl($scope, $routeParams){


    console.trace('detalleCtrl entra');

    $scope.id = $routeParams.id;

}]);