angular.
  module('tareasApp').  // nombre App
  component('listadoTareas', {   
    templateUrl: './js/components/listadoTareas/template.lista-tareas.html',
    controller: function TareasController($http, $sce, $scope) { 

      console.trace('Lista Tareas'); 


      var self = this; //asi las variables del ambito del controlador, puedo hacer referencia en funciones internas

      //propiedades
      self.titulo = "Listado tareas";
      self.tareas = [];
      self.mensajeError = "";
      self.ENDPOINT = "http://localhost:3000/tareas/";

      $scope.nuevaTarea = "";
      $scope.mensajeValidacion = "";


      //eventos

      self.$onInit = function(){
        console.log('iniciando...');

       $http.get(self.ENDPOINT).then(function(response){ //funcion de exito
            self.tareas = response.data;

       }, function(response){ //funcion si falla


            console.warn('Tenemos un error : %o', response);
            self.mensajeError = "Codigo: "+response.status+" : Ha fallado la petición";
       });
      };


      //funciones
      
      $scope.agregarTarea = function(){

        console.trace('click boton crear tarea con descripcion= ' + $scope.nuevaTarea);

        let descripcion = $scope.nuevaTarea.trim();

        if( descripcion.length <= 2){

          $scope.mensajeValidacion = "Por favor escribe una descripcion mas larga.";

        }else{
          console.trace('llamada post');
          $scope.mensajeValidacion = "";

          let data = {
            "completada" : false,
            "descripcion" : descripcion
          };
          $http.post(self.ENDPOINT, data).then(function(response){

            console.log('post hecho');

          }, function(response){ //funcion si falla
   
   
            console.warn('Tenemos un error : %o', response);
            self.mensajeError = "Codigo: "+response.status+" : No se ha podido crear";
              
          });
         };


      } // end agregarTarea
      
      $scope.eliminarTarea = function(tarea){

        if(!confirm("¿Estás seguro de eliminar la tarea?")){
          return;
        }

        let url = self.ENDPOINT +  tarea.id;

        $http.delete(url).then(function(response){

          console.trace('Tarea eliminada');

        }, function(response){

          console.warn('error en eliminar');

        });

        console.trace('eliminar tarea: %o', tarea);

      };

      $scope.completarTarea = function(tarea){ //Mejor con patch, porque solo quiero modificar el completada

        let url = self.ENDPOINT +  tarea.id;
        let data = {
            "completada" : !tarea.completada, 
            "descripcion": tarea.descripcion
        };

        

        $http.put(url, data).then(function(response){

          console.trace('Tarea eliminada');

        }, function(response){

          console.warn('error en eliminar');
          self.mensajeError = "Codigo: "+response.status+" : Ha fallado la petición";

        });

        console.trace('eliminar tarea: %o', tarea);

      };

      $scope.modificarTarea = function(tarea){

        
        let url = self.ENDPOINT +  tarea.id;
        let data = {
            "completada" : tarea.completada, 
            "descripcion": tarea.descripcion
        };

        

        $http.put(url, data).then(function(response){

          console.trace('Tarea eliminada');

        }, function(response){

          console.warn('error en eliminar');

        });



      };
     

    }
  });