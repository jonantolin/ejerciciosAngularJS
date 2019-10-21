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
                  "nombre": "Map|Filter|Reduce",
                  "path" : "#!/map-filter-reduce",
                  "active" : false,
                  "icono" : "fas fa-vector-square"
                },
                {
                  "nombre": "Contratos",
                  "path" : "#!/programacion-funcional",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "Promesas",
                  "path" : "#!/promesas",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "Services",
                  "path" : "#!/servicios",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "CRUD",
                  "path" : "#!/ejercicioCRUD",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "Formularios",
                  "path" : "#!/formularios",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "Filtros",
                  "path" : "#!/filtros",
                  "active" : false,
                  "icono" : "fas fa-file-contract"
                },
                {
                  "nombre": "Pokemones",
                  "path" : "#!/pokemones",
                  "active" : false,
                  "icono" : "fas fa-bug"
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