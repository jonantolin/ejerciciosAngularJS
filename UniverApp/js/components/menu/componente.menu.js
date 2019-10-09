angular.module('universidadApp')
    .component('menuPrincipal',{
        templateUrl : './js/components/menu/template.html',
        controller: function menuController($scope){

            $scope.rutas = [
                {
                  "nombre": "Inicio",
                  "path" : "#!/",
                  "active" : false
                },
                {
                  "nombre": "Profesores",
                  "path" : "#!/profesores",
                  "active" : false
                },
                {
                  "nombre": "Alumnos",
                  "path" : "#!/alumnos",
                  "active" : false
                },
                {
                  "nombre": "Creditos",
                  "path" : "#!/creditos",
                  "active" : false
                },
                {
                  "nombre": "Tareas",
                  "path" : "#!/tareas",
                  "active" : false
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