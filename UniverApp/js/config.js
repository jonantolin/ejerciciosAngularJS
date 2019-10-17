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
    .when('/formularios',{
      templateUrl: 'parciales/formularios.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .when('/pokemones',{
      templateUrl: 'parciales/pokemones.html'

    })
    .when('/pokemon/:nombre',{
      templateUrl: 'parciales/pokemon.html'
      //controller: 'pokemonController'
    })
   /* .when('/alumno/:id',{ para pasar parametros
      templateUrl: 'parciales/formularios.html'
      controller: alumnoCtrl   // el controlador que se utilizara en ese html
    })
    en el controlador, inyectarle $routeParams y luego
    $cope.codigo = $routeParams.codigo;  // asi recojo el parametro
    
    (luego para mandarle el id, por ejemplo a href= alumno/{{alumno.id}})
    */
    .otherwise({
      redirectTo: '/'
    })

})
