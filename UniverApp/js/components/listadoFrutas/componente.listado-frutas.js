angular.module('universidadApp')
    .component('componenteFrutas',{
        templateUrl: './js/components/listadoFrutas/template.listado-frutas.html',
        controller: function controladorFrutas($http){

            let url = "http://localhost:3000/frutas";
            let self = this;

            self.orden = "";
            self.descendente = false;

            self.iconoOrden = "";

            self.pagina=0;
            

            self.siguientePagina = function(pagina){

                self.pagina = pagina + 1;
                self.frutasPagina = self.frutas.slice(3 * self.pagina, (self.pagina * 3) + 3 );



            }

            self.anteriorPagina = function(pagina){

                self.pagina = pagina - 1;
                self.frutasPagina = self.frutas.slice(3 * self.pagina, (self.pagina * 3) + 3 );



            }

            $http.get(url).then(function(response){

                self.frutas = response.data;
                self.frutasPagina = self.frutas.slice(3 * self.pagina, self.pagina + 3 );

            }, function(response){

                console.warn('listado frutas ha fallado la peticion');


            });

            self.ordenar = function (campo){

                self.orden = campo;
                self.descendente = !self.descendente;

                if(self.descendente){
                    self.iconoOrden = "down";
                }else{
                    self.iconoOrden = "up";
                }


            }



        }


    });

    angular.module('universidadApp').
        filter('euros', function(){

            return function(numero){

                return numero.replace(".", ",") +" €";

            }

        });