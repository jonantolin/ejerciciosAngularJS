app.controller('servicesController', ['$scope', '$http', '$log', 'servicioConstantes', 'rectanguloService', 'rectangulo2',
                                     function servicesController($scope, $http, $log, servicioConstantes, rectanguloService, rectangulo2){

    

   $scope.titulo = "Services " + servicioConstantes.titulo;   

    //usamos el servicio rectanguloService

    rectanguloService.setAlto(4);
    rectanguloService.setAncho(3);

    $scope.area = rectanguloService.getArea();

    $scope.area2 = rectangulo2.getArea();
   
   $scope.seguro={
    nif:"",
    nombre:"",
    ape1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numHijos:undefined,
    embarazada:false,
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  }
   
  $log.debug("Acabamos de crear el $scope");

  $scope.contanteEscapada = "{{constante}}";


}]);