// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/alumnos',{
        templateUrl: 'parciales/alumnos.html'
    })
    .when('/profesores',{
        templateUrl: 'parciales/profesores.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
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
    .otherwise({
      redirectTo: '/'
    })

})
