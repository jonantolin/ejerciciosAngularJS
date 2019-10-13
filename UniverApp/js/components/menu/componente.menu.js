angular.module('universidadApp')
    .component('menuPrincipal',{
        templateUrl : './js/components/menu/template.html',
        controller: function menuController($scope){

            $scope.rutas = [
                {
                  "nombre": "Inicio",
                  "path" : "#!/",
                  "active" : false,
                  "icono" : "fas fa-home"
                },           
                {
                  "nombre": "Tareas",
                  "path" : "#!/tareas",
                  "active" : false,
                  "icono" : "fas fa-tasks"
                },
                {
                  "nombre": "Componentes",
                  "path" : "#!/componentes",
                  "active" : false,
                  "icono" : "fas fa-project-diagram"
                },
                {
                  "nombre": "Frutas",
                  "path" : "#!/frutas",
                  "active" : false,
                  "icono" : "fas fa-carrot"
                },
                {
                  "nombre": "Map, Filter, Reduce",
                  "path" : "#!/map-filter-reduce",
                  "active" : false,
                  "icono" : "fas fa-vector-square"
                },
                {
                  "nombre": "Prog. Funcional (Contratos)",
                  "path" : "#!/programacion-funcional",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                }
              ];
            
              $scope.cambiarActivo = function( ruta ){
                console.trace('click cambiarActivo %o', ruta);
                $scope.rutas.forEach(element => {
                  element.active = false;
                });
                ruta.active = true;
              }


        }
    });