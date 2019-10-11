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
                  "nombre": "Profesores",
                  "path" : "#!/profesores",
                  "active" : false,
                  "icono" : "fas fa-user-tie"
                },
                {
                  "nombre": "Alumnos",
                  "path" : "#!/alumnos",
                  "active" : false,
                  "icono" : "fas fa-home"
                },
                {
                  "nombre": "Creditos",
                  "path" : "#!/creditos",
                  "active" : false,
                  "icono" : "fas fa-home"
                },
                {
                  "nombre": "Tareas",
                  "path" : "#!/tareas",
                  "active" : false,
                  "icono" : "fas fa-home"
                },
                {
                  "nombre": "Componentes",
                  "path" : "#!/componentes",
                  "active" : false,
                  "icono" : "fas fa-home"
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
                  "icono" : "fas fa-carrot"
                },
                {
                  "nombre": "Ejemplo Real (map, filter, etc)",
                  "path" : "#!/programacion-funcional",
                  "active" : false,
                  "icono" : "fas fa-carrot"
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