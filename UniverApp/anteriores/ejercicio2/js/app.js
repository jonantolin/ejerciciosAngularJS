

// Controladores

app.controller('profesorController', function($scope, $timeout){

    //propiedades 

    $scope.editando = {};
    $scope.esVisible = false;
    $scope.animacion = "";
    

    $scope.profesor = {
        nombre: "Jonas",
        bio: "Saludos estudiante, mi nombre es Jonas, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
        edad: 67,
        foto: "anteriores/ejercicio2/images/profesor.jpg"
    }

    //funciones

    $scope.editar = function(){

        console.trace("click editar");
        angular.copy( $scope.profesor, $scope.editando);
        $scope.animacion = "animated fadeInDown";
        $scope.esVisible = true;

    }

    $scope.guardar = function(){

        console.trace("click guardar");
        angular.copy( $scope.editando, $scope.profesor);
        $scope.animacion = "animated fadeOutUp";
        $timeout(function(){
            $scope.esVisible = false;
            $scope.animacion = "";
        }, 1000);
        

    }

    $scope.cancelar = function(){

        console.trace("click cancelar");
       $scope.editando = {};
       $scope.animacion = "animated fadeOutUp";
        $timeout(function(){
            $scope.esVisible = false;
            $scope.animacion = "";
         }, 1000);

    }


    
});


app.controller('videoController', function($scope, $timeout){

    $scope.animacionLike = "";

    $scope.video = {
        id: 3,
        nombre: "Toteking - Todo el Día Barras (Video Oficial) ft. Morodo",
        codigo: "Us3oChCVkIc",
        categoria: {
            id: 3,
            nombre: "Música"
        },
        usuario:{
            id: 23,
            nombre: "Pepe"
        },
        likes: 5
    };

    $scope.sumarLike = function(){

        $scope.animacionLike = "animated pulse";
        $scope.video.likes++;
        $timeout(function(){
            $scope.animacionLike = "";
        }, 1000);

    };

    
});

app.controller('fruteriaController', function($scope){

    $scope.frutas = ["Manzana", "Pera", "Naranja"];
    $scope.frutasJson = {"frutas" :[
        {"nombre" : "Manzana",
        "color" : "Verde"},
        {"nombre" : "Pera",
        "color" : "Amarilla"},
        {"nombre" : "Kiwi",
        "color" : "Marrón"}


    ]};

    $scope.activar = "";

    $scope.activarLink = function(fruta, event){

        //$scope.activar = "active";
        if(event.target.classList.contains('active')){
            event.target.classList.remove('active');
        }else{
            event.target.classList.add('active');
        }
        
    }


});