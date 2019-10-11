angular.module('universidadApp')
    .component('componenteFrutas',{
        templateUrl: './js/components/listadoFrutas/template.listado-frutas.html',
        controller: function controladorFrutas($http){

            let url = "http://localhost:3000/frutas";
            let self = this;

            self.orden = "";
            self.descendente = false;

            self.colores = [];

            self.iconoOrden = "";

            self.pagina=0;

            self.posicion = 3; //mostrara productos de 3 en 3

            self.colores = [];
            

            self.siguientePagina = function(pagina){

                self.pagina = pagina + 1;
             
                self.posicion += 3; 
               // self.frutasPagina = self.frutas.slice(3 * self.pagina, (self.pagina * 3) + 3 );



            }

            self.anteriorPagina = function(pagina){

                self.pagina = pagina - 1;
                
                self.posicion -= 3;
               // self.frutasPagina = self.frutas.slice(3 * self.pagina, (self.pagina * 3) + 3 );



            }

            $http.get(url).then(function(response){

                self.frutas = response.data;
                self.frutas10e = response.data.filter( e=> e.precio >10).map( e=> e.nombre);
                self.precioTotal = response.data.map( e=> e.precio).reduce((pv, cv) => pv+cv );

                // v = valor, i = indice, a = el array
                self.colores = response.data.map(e=>e.color).filter((v, i, a) => a.indexOf(v) === i);


                // Lo de abajo está muy bien si no existiera el filtro "limitTo"
                //self.frutasPagina = self.frutas.slice(3 * self.pagina, self.pagina + 3 );

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

    angular.module('universidadApp').
        filter('colores', function(){ // Filtro que saca los colores y evita que se repitan

            return function(a){

                return a.map(e=>e.color).filter((v, i, a) => a.indexOf(v) === i);

            }

        });    

    angular.module('universidadApp').
        filter('noRepetir', function(){ // 

            return function(a){

                return a.filter((v, i, a) => a.indexOf(v) === i);

            }

        });    