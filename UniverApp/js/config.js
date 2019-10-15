// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/tareas',{
      template: '<listado-tareas></listado-tareas>'
    })
    .when('/componentes',{
      templateUrl: 'parciales/componente.html'
    })
    .when('/frutas',{
      templateUrl: 'parciales/frutas.html'
    })
    .when('/map-filter-reduce',{
      templateUrl: 'parciales/map-filter-reduce.html'
    })
    .when('/programacion-funcional',{
      templateUrl: 'parciales/programacion-funcional.html'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/ejercicioCRUD',{
      templateUrl: 'parciales/ejercicioCRUD.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
